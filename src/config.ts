// ============================================================
// Site Configuration
// Replace all values before deploying.
// Template-specific configs (contact, pricing, etc.) extend this file.
// ============================================================

export const SITE_DEFAULTS = {
  DESCRIPTION: "REPLACE_WITH_YOUR_DESCRIPTION",
  URL: "https://example.com",
} as const;

// ── Color tokens ──────────────────────────────────────────────────────────────
// Minimum WCAG AA: 4.5:1 for normal text, 3:1 for large text / UI components
// Check contrast: https://webaim.org/resources/contrastchecker/
export const COLORS = {
  // Light mode
  bgBase:        "#ffffff",
  bgSurface:     "#f8fafc",
  bgElevated:    "#f1f5f9",
  textBase:      "#0f172a",
  textMuted:     "#64748b",
  textInverted:  "#ffffff",
  brandPrimary:  "#4f46e5",
  brandSecondary:"#8b5cf6",
  brandAccent:   "#06b6d4",
  borderBase:    "#e2e8f0",
  // Dark mode
  dark: {
    bgBase:      "#0f172a",
    bgSurface:   "#1e293b",
    bgElevated:  "#334155",
    textBase:    "#f8fafc",
    textMuted:   "#94a3b8",
    borderBase:  "#334155",
  },
} as const;

export const SITE = {
  name: "Core Boilerplate",
  url: SITE_DEFAULTS.URL,
  description: SITE_DEFAULTS.DESCRIPTION,
  logo: "/logo.svg",
  ogImage: "/og-default.jpg",
  lang: "en",
  allRightsReserved: "All rights reserved.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Docs", href: "https://astro.build/docs" },
];

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  // { platform: "Twitter", href: "https://twitter.com/yourhandle", label: "Follow us on Twitter" },
  // { platform: "Instagram", href: "https://instagram.com/yourhandle", label: "Follow us on Instagram" },
  // { platform: "LinkedIn", href: "https://linkedin.com/company/yourcompany", label: "Connect on LinkedIn" },
];
