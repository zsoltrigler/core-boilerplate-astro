// ============================================================
// Site Configuration
// Replace all values before deploying.
// Template-specific configs (contact, pricing, etc.) extend this file.
// ============================================================

export const SITE_DEFAULTS = {
  DESCRIPTION: "REPLACE_WITH_YOUR_DESCRIPTION",
  URL: "https://example.com",
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
