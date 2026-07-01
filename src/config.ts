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
  brandSecondary: "#8b5cf6",
  brandAccent: "#06b6d4",
  borderBase: "#e2e8f0",
  borderStrong: "#cbd5e1",
  // * Darkened to pass WCAG AA (4.5:1) on white — math is symmetric, so these
  //   also pass as backgrounds with white text (e.g. Danger button).
  statusSuccess: "#15803d", // green-700  — 5.02:1 on white
  statusWarning: "#b45309", // amber-700  — 5.02:1 on white
  statusError: "#dc2626",   // red-600    — 4.83:1 on white
  statusInfo: "#2563eb",    // blue-600   — 5.17:1 on white

  // * Dark mode overrides — omit a key to inherit its light-mode value.
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
    statusError: "#f87171",   // red-400    — 6.21:1 on bgBase dark
    statusInfo: "#60a5fa",    // blue-400   — 6.31:1 on bgBase dark
  },
} as const

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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  },
  {
    platform: "X (Twitter)",
    href: "https://x.com",
    label: "X (Twitter)",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    platform: "Instagram",
    href: "https://instagram.com",
    label: "Instagram",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  },
]
