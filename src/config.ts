// ============================================================
// Site Configuration
// Replace all values before deploying.
// Template-specific configs (contact, pricing, etc.) extend this file.
// ============================================================

export const SITE = {
  name: "Core Boilerplate",
  url: "https://example.com",
  description: "A modern, accessible, and performant web experience.",
  logo: "/logo.svg",
  ogImage: "/og-default.jpg",
  lang: "en",
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
