// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import { createHash } from "node:crypto"
import { COLORS, SITE } from "./src/config.ts"
import { THEME_SCRIPT } from "./src/lib/theme-script.ts"
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

// ── Content-Security-Policy ───────────────────────────────────────────────────
// * Astro hashes every bundled script/style and emits the policy as a <meta
//   http-equiv="content-security-policy"> tag (build/preview only — `astro dev`
//   has none). Directives that <meta> ignores (frame-ancestors) are sent as a real
//   header — see src/lib/security-headers.ts.
// * The theme FOUC script must stay an inline classic script (see
//   src/lib/theme-script.ts), so Astro can't hash it — its sha256 is added here.
/** @type {`sha256-${string}`} */
const themeScriptHash = `sha256-${createHash("sha256").update(THEME_SCRIPT).digest("base64")}`

// ! Adding an external origin? Add it to the matching directive below, e.g.
//     analytics script   → scriptDirective.resources: ["'self'", "https://analytics.example.com"]
//     web-font host      → directives: ["font-src 'self' https://fonts.gstatic.com"], and its
//                          stylesheet origin in styleDirective.resources (kind "element")
//     Cloudflare Turnstile → script-src https://challenges.cloudflare.com
//                          + directives: ["frame-src https://challenges.cloudflare.com"]
//   A directive listed in `directives` replaces the default for that name — repeat 'self'.
//   Shiki (markdown code blocks) and <ClientRouter /> are incompatible with this CSP.
/** @type {import("astro").AstroUserConfig["security"]} */
const security = {
  csp: {
    directives: [
      "default-src 'self'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ],
    scriptDirective: {
      resources: ["'self'"],
      hashes: SITE.singleTheme ? [] : [themeScriptHash],
    },
    styleDirective: {
      // * 'unsafe-inline' is scoped to style="" attributes only (custom properties,
      //   Progress/Stepper/Skeleton sizes, anchor-name) — <style> elements stay hashed.
      resources: [
        { resource: "'self'", kind: "element" },
        { resource: "'unsafe-inline'", kind: "attribute" },
      ],
    },
  },
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

  // * Prefetches a page's HTML on link hover, so the click feels instant.
  // ! prefetchAll: true is required to cover every link by default — plain
  //   `prefetch: true` alone only adds the prefetch script, it does not
  //   prefetch anything unless individual links carry data-astro-prefetch.
  prefetch: {
    prefetchAll: true,
  },

  security,

  // ! Shiki (Astro's default highlighter) emits inline style="" per token and is
  //   incompatible with this CSP. Core ships no Markdown, so it is off; a project
  //   with code blocks should use `syntaxHighlight: "prism"` (class-based, CSP-safe).
  markdown: { syntaxHighlight: false },

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
