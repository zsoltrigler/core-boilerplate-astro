// ============================================================
// * Site Configuration — your single source of truth.
// * Edit this file to configure branding, colors, and navigation.
// ! Replace all placeholder values before deploying.
// ============================================================

// ! Intentional placeholder — the build will warn if SITE.description is unchanged.
export const PLACEHOLDER_DESCRIPTION = "REPLACE_WITH_YOUR_DESCRIPTION" as const

// ── Color Tokens ──────────────────────────────────────────────────────────────
// * Colors are injected into CSS automatically via the Vite plugin in astro.config.mjs.
// ! Edit colors here only — never touch the generated @theme block in global.css.
// * WCAG AA minimums: 4.5:1 for body text, 3:1 for large text and UI components.
// ? Check contrast ratios: https://webaim.org/resources/contrastchecker/
export const COLORS = {
  // Light mode
  bgBase: "#ffffff", // page background
  bgSurface: "#f8fafc", // card and input background
  bgElevated: "#f1f5f9", // hover states, dropdowns
  textBase: "#0f172a", // primary text
  textMuted: "#5d6b7d", // secondary / helper text — darkened to pass 4.5:1 on bgElevated
  textInverted: "#ffffff", // text on brand-colored backgrounds
  brandPrimary: "#4f46e5",
  brandSecondary: "#7c3aed", // violet-600 — 5.70:1 on white
  brandAccent: "#0e7490", // cyan-700  — 5.36:1 on white
  borderBase: "#e2e8f0",
  borderStrong: "#cbd5e1",
  // * Modal/Drawer backdrop scrim — intentionally the same in light and dark
  //   (a black overlay reads correctly against either), but still sourced
  //   from a token rather than a literal so it's overridable per template.
  overlay: "#000000",
  // * Darkened to pass WCAG AA (4.5:1) on white — math is symmetric, so these
  //   also pass as backgrounds with white text (e.g. Danger button).
  statusSuccess: "#15803d", // green-700  — 5.02:1 on white
  statusWarning: "#b45309", // amber-700  — 5.02:1 on white
  statusError: "#dc2626", // red-600    — 4.83:1 on white
  statusInfo: "#2563eb", // blue-600   — 5.17:1 on white

  // * Dark mode overrides — omit a key to inherit its light-mode value.
  // * The entire `dark` object is optional — single-theme templates can remove
  //   it completely; no .dark CSS block is generated and no duplication is needed.
  dark: {
    bgBase: "#0f172a",
    bgSurface: "#1e293b",
    bgElevated: "#334155",
    textBase: "#f8fafc",
    textMuted: "#a0aec0", // lightened to pass 4.5:1 on bgElevated dark (#334155)
    borderBase: "#334155",
    borderStrong: "#475569",
    brandPrimary: "#5b5fef",
    // * Bright status colors for dark mode — high contrast on dark backgrounds.
    statusSuccess: "#22c55e", // green-500  — 7.83:1 on bgBase dark
    statusWarning: "#f59e0b", // amber-400  — 8.31:1 on bgBase dark
    statusError: "#f87171", // red-400    — 6.21:1 on bgBase dark
    statusInfo: "#60a5fa", // blue-400   — 6.31:1 on bgBase dark
  },
} as const

// ── OG Locale Map ─────────────────────────────────────────────────────────────
// * Maps BCP 47 lang codes to og:locale format (language_REGION).
// * Used by BaseLayout to derive og:locale from the lang prop automatically.
// * Add an entry here if you introduce a new language to the project.
export const OG_LOCALE_MAP: Record<string, string> = {
  en: "en_US",
  hu: "hu_HU",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
  nl: "nl_NL",
  pt: "pt_PT",
  pl: "pl_PL",
  ro: "ro_RO",
}

// ── Site Metadata ─────────────────────────────────────────────────────────────
export const SITE = {
  name: "Core Boilerplate",
  description: PLACEHOLDER_DESCRIPTION,
  logo: "", // path to logo image (SVG, PNG, etc.); leave empty for text-only
  showName: true, // show site name text next to the logo
  favicon: "/favicon.svg",
  ogImage: "/og-default.jpg", // default Open Graph image — must be JPG/PNG (SVG not supported by social platforms)
  twitterHandle: "", // e.g. "@yourusername" — enables twitter:site meta tag when set
  author: "", // used in <meta name="author"> — your name or company
  email: "", // contact email — optional, only used where explicitly rendered
  lang: "en",
  allRightsReserved: "All rights reserved.",
  // * Set to true for single-theme templates with no dark mode (pair with
  //   omitting COLORS.dark in src/config.ts). Skips the FOUC-prevention
  //   script and the dark theme-color meta tag in BaseLayout — both are
  //   dead weight without a dark palette or a ThemeToggle to switch to it.
  singleTheme: false,
} as const

// ── Navigation ────────────────────────────────────────────────────────────────
// * Rendered in the Header. Supports internal paths and external URLs.
export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "GitHub", href: "https://github.com/zsoltrigler/core-boilerplate-astro" },
] as const satisfies NavLink[]

// ── Social Links ──────────────────────────────────────────────────────────────
// * Rendered in the Footer. Remove entries you don't need.
// * The icon field accepts an inline SVG string; omit it to show the platform name as text.
export interface SocialLink {
  platform: string
  href: string
  // ! Always provide a descriptive label — it is used as the aria-label for screen readers.
  label: string
  icon?: string // inline SVG string
}

// ! Replace href values with your actual profile URLs before deploying.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com",
    label: "GitHub",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0"/></path></g></svg>`,
  },
  {
    platform: "X (Twitter)",
    href: "https://x.com",
    label: "X (Twitter)",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><path d="M1 2h2.5l15 20h-2.5ZM5.5 2h2.5l15 20h-2.5Z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5l0 0h-2.5ZM5.5 2h2.5l-0.8 0h-2.5Z;M1 2h2.5l15 20h-2.5ZM5.5 2h2.5l15 20h-2.5Z"/></path><path d="M3 2h5v0h-5ZM16 22h5v0h-5Z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" to="M3 2h5v2h-5ZM16 22h5v-2h-5Z"/></path><path d="M18.5 2h3.5l0 0h-3.5Z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" to="M18.5 2h3.5l-17 20h-3.5Z"/></path></g></svg>`,
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="4" cy="4" r="2" fill="currentColor" opacity="0"><animate fill="freeze" attributeName="opacity" dur="0.2s" to="1"/></circle><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><g stroke-dasharray="12" stroke-dashoffset="12"><path d="M4 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" to="0"/></path><path d="M10 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" to="0"/></path></g><path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" to="0"/></path></g></svg>`,
  },
  {
    platform: "Instagram",
    href: "https://instagram.com",
    label: "Instagram",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="66" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"/></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" to="0"/></path></g><circle cx="17" cy="7" r="1.5" fill="currentColor" opacity="0"><animate fill="freeze" attributeName="opacity" begin="1.3s" dur="0.2s" to="1"/></circle></svg>`,
  },
]
