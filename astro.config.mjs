// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import { COLORS } from "./src/config.ts"
import { runContrastChecks } from "./scripts/contrast-check.mjs"
import { validateConfig } from "./scripts/validate-config.mjs"

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Convert camelCase to kebab-case: bgBase → bg-base
 * @param {string} str
 * @returns {string}
 */
function toKebab(str) {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

/** Generate @property, @theme, and (optionally) .dark blocks from the COLORS object.
 * @property registration makes CSS color tokens typed (<color>) so the browser can
 * interpolate between light and dark values. Combined with the universal
 * * { transition: color, background-color, ... } rule in global.css, toggling
 * .dark on <html> triggers smooth, synchronized transitions on every element.
 * ! `dark` is optional — single-theme templates can omit it entirely and no
 *   .dark block is generated, so there is nothing to duplicate or keep in sync.
 * @param {typeof import('./src/config.ts').COLORS} colors
 * @returns {string}
 */
function generateColorTokens(colors) {
  const { dark, ...light } = colors

  // * @property must list light-mode values as initial-value (the baseline before .dark).
  const propertyDeclarations = Object.entries(light)
    .map(
      ([k, v]) =>
        `@property --color-${toKebab(k)} { syntax: '<color>'; inherits: true; initial-value: ${v}; }`
    )
    .join("\n")

  const themeVars = Object.entries(light)
    .map(([k, v]) => `  --color-${toKebab(k)}: ${v};`)
    .join("\n")

  const darkBlock = dark
    ? [
        ``,
        `.dark {`,
        Object.entries(dark)
          .map(([k, v]) => `  --color-${toKebab(k)}: ${v};`)
          .join("\n"),
        `}`,
      ]
    : []

  // * Header comment is intentional — warns anyone who opens the compiled CSS.
  return [
    `/* Auto-generated from COLORS in src/config.ts — do not edit here */`,
    `/* WCAG AA: min 4.5:1 for text, 3:1 for UI components */`,
    `/* Check: https://webaim.org/resources/contrastchecker/ */`,
    ``,
    `/* @property makes color tokens typed so the browser can interpolate them */`,
    propertyDeclarations,
    ``,
    `@theme {`,
    themeVars,
    `}`,
    ...darkBlock,
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
    transform(/** @type {string} */ code, /** @type {string} */ id) {
      if (!id.endsWith("/global.css")) return
      if (!code.includes("/* @inject-color-tokens */")) return
      return { code: code.replace("/* @inject-color-tokens */", tokens), map: null }
    },
  }
}

// ── Config validation ─────────────────────────────────────────────────────────
// * Runs at build time, always throws — an invalid shape (bad hex color, empty
//   required field, malformed URL) is a hard error, not a style nitpick.
// * Schema lives in scripts/validate-config.mjs — edit there.
validateConfig()

// ── WCAG contrast checks ──────────────────────────────────────────────────────
// * Runs at build time. Locally warns; in CI throws to block the deploy.
// * Pairs and logic live in scripts/contrast-check.mjs — edit there.
runContrastChecks()

// https://astro.build/config
export default defineConfig({
  // ! Set SITE_URL in your deployment environment — without it, sitemap and
  //   canonical URLs fall back to localhost and will be wrong in production.
  site: process.env.SITE_URL ?? "http://localhost:4321",

  vite: {
    // * Order matters: colorTokensPlugin must run before tailwindcss
    //   so the generated @theme block is visible to Tailwind at build time.
    plugins: [colorTokensPlugin(), tailwindcss()],
    build: {
      // * Disable CSS code splitting so all Tailwind utilities land in a single
      //   stylesheet — prevents component CSS chunks from becoming render-blocking
      //   resources in the critical path.
      cssCodeSplit: false,
    },
  },

  // * /ui is a developer-facing component showcase — exclude from sitemap and SEO.
  integrations: [sitemap({ filter: (page) => !page.includes("/ui/") }), icon()],
})
