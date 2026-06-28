// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import { hex } from "wcag-contrast"

import { COLORS } from "./src/config.ts"

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Convert camelCase to kebab-case: bgBase → bg-base
 * @param {string} str
 * @returns {string}
 */
function toKebab(str) {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

/** Generate @theme and .dark CSS blocks from the COLORS object.
 * @param {typeof import('./src/config.ts').COLORS} colors
 * @returns {string}
 */
function generateColorTokens(colors) {
  const { dark, ...light } = colors

  const themeVars = Object.entries(light)
    .map(([k, v]) => `  --color-${toKebab(k)}: ${v};`)
    .join("\n")

  const darkVars = Object.entries(dark)
    .map(([k, v]) => `  --color-${toKebab(k)}: ${v};`)
    .join("\n")

  // * Header comment is intentional — warns anyone who opens the compiled CSS.
  return [
    `/* Auto-generated from COLORS in src/config.ts — do not edit here */`,
    `/* WCAG AA: min 4.5:1 for text, 3:1 for UI components */`,
    `/* Check: https://webaim.org/resources/contrastchecker/ */`,
    `@theme {`,
    themeVars,
    `}`,
    ``,
    `.dark {`,
    darkVars,
    `}`,
  ].join("\n")
}

/** Vite plugin: replaces the /* @inject-color-tokens *\/ marker in global.css
 *  with the generated @theme and .dark blocks at build time.
 */
function colorTokensPlugin() {
  const tokens = generateColorTokens(COLORS)
  return {
    name: "color-tokens",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith("/global.css")) return
      if (!code.includes("/* @inject-color-tokens */")) return
      return { code: code.replace("/* @inject-color-tokens */", tokens), map: null }
    },
  }
}

// ── WCAG contrast checks ──────────────────────────────────────────────────────
// * Runs at build time. Logs a warning — does NOT fail the build — so you can
//   iterate on colors without being blocked.
// * In CI, contrast failures are hard errors to prevent regressions from shipping.
function warnOrThrow(msg) {
  if (process.env.CI) throw new Error(msg)
  console.warn(msg)
}

const contrastPairs = [
  { name: "textBase on bgBase (light)", fg: COLORS.textBase, bg: COLORS.bgBase, min: 4.5 },
  { name: "textMuted on bgBase (light)", fg: COLORS.textMuted, bg: COLORS.bgBase, min: 4.5 },
  {
    name: "textInverted on brandPrimary",
    fg: COLORS.textInverted,
    bg: COLORS.brandPrimary,
    min: 4.5,
  },
  { name: "textBase on bgSurface (light)", fg: COLORS.textBase, bg: COLORS.bgSurface, min: 4.5 },
  {
    name: "textInverted on brandPrimary (dark)",
    fg: COLORS.textInverted,
    bg: COLORS.dark.brandPrimary,
    min: 4.5,
  },
  { name: "textBase on bgBase (dark)", fg: COLORS.dark.textBase, bg: COLORS.dark.bgBase, min: 4.5 },
  {
    name: "textMuted on bgBase (dark)",
    fg: COLORS.dark.textMuted,
    bg: COLORS.dark.bgBase,
    min: 4.5,
  },
  {
    name: "textBase on bgSurface (dark)",
    fg: COLORS.dark.textBase,
    bg: COLORS.dark.bgSurface,
    min: 4.5,
  },

  // * Status colors as text on light bg (Badge, Alert) — symmetric: also validates white text on them (Danger button)
  { name: "statusSuccess on bgBase (light)", fg: COLORS.statusSuccess, bg: COLORS.bgBase, min: 4.5 },
  { name: "statusWarning on bgBase (light)", fg: COLORS.statusWarning, bg: COLORS.bgBase, min: 4.5 },
  { name: "statusError on bgBase (light)", fg: COLORS.statusError, bg: COLORS.bgBase, min: 4.5 },
  { name: "statusInfo on bgBase (light)", fg: COLORS.statusInfo, bg: COLORS.bgBase, min: 4.5 },

  // * Status colors as text on dark bg (Badge, Alert in dark mode)
  { name: "statusSuccess on bgBase (dark)", fg: COLORS.dark.statusSuccess, bg: COLORS.dark.bgBase, min: 4.5 },
  { name: "statusWarning on bgBase (dark)", fg: COLORS.dark.statusWarning, bg: COLORS.dark.bgBase, min: 4.5 },
  { name: "statusError on bgBase (dark)", fg: COLORS.dark.statusError, bg: COLORS.dark.bgBase, min: 4.5 },
  { name: "statusInfo on bgBase (dark)", fg: COLORS.dark.statusInfo, bg: COLORS.dark.bgBase, min: 4.5 },
]

for (const { name, fg, bg, min } of contrastPairs) {
  const ratio = hex(fg, bg)
  if (ratio < min) {
    warnOrThrow(
      `[contrast] FAIL "${name}": ${ratio.toFixed(2)}:1 (min ${min}:1) — fix COLORS in src/config.ts`
    )
  }
}

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? "http://localhost:4321",

  vite: {
    // * Order matters: colorTokensPlugin must run before tailwindcss
    //   so the generated @theme block is visible to Tailwind at build time.
    plugins: [colorTokensPlugin(), tailwindcss()],
  },

  // * /ui is a developer-facing component showcase — exclude from sitemap and SEO.
  integrations: [sitemap({ filter: (page) => !page.includes("/ui/") })],
})
