// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import { hex } from "wcag-contrast"

import { SITE, SITE_DEFAULTS, COLORS } from "./src/config.ts"

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
      if (!id.includes("global.css")) return
      if (!code.includes("/* @inject-color-tokens */")) return
      return { code: code.replace("/* @inject-color-tokens */", tokens), map: null }
    },
  }
}

// ── Placeholder checks ────────────────────────────────────────────────────────
// ! These warn at build time if the default values in config.ts were not replaced.

if (SITE.url === SITE_DEFAULTS.URL) {
  console.warn(
    "[config] SITE.url is still set to the placeholder. Update it in src/config.ts before deploying."
  )
}

// ── WCAG contrast checks ──────────────────────────────────────────────────────
// * Runs at build time. Logs a warning — does NOT fail the build — so you can
//   iterate on colors without being blocked.
// TODO: Consider throwing an error in CI environments for stricter enforcement.

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
]

for (const { name, fg, bg, min } of contrastPairs) {
  const ratio = hex(fg, bg)
  if (ratio < min) {
    console.warn(
      `[contrast] FAIL "${name}": ${ratio.toFixed(2)}:1 (min ${min}:1) — fix COLORS in src/config.ts`
    )
  }
}

// https://astro.build/config
export default defineConfig({
  site: SITE.url,

  vite: {
    // * Order matters: colorTokensPlugin must run before tailwindcss
    //   so the generated @theme block is visible to Tailwind at build time.
    plugins: [colorTokensPlugin(), tailwindcss()],
  },

  integrations: [sitemap()],
})
