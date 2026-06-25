// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { hex } from 'wcag-contrast';

import { SITE, SITE_DEFAULTS, COLORS } from './src/config.ts';

// ── Placeholder checks ────────────────────────────────────────────────────────

if (SITE.url === SITE_DEFAULTS.URL) {
  console.warn("[config] SITE.url is still set to the placeholder. Update it in src/config.ts before deploying.");
}

// ── WCAG contrast checks ──────────────────────────────────────────────────────
// AA requires 4.5:1 for normal text, 3:1 for large text / UI components

const contrastPairs = [
  // Light mode
  { name: "textBase on bgBase (light)",        fg: COLORS.textBase,      bg: COLORS.bgBase,        min: 4.5 },
  { name: "textMuted on bgBase (light)",        fg: COLORS.textMuted,     bg: COLORS.bgBase,        min: 4.5 },
  { name: "textInverted on brandPrimary",       fg: COLORS.textInverted,  bg: COLORS.brandPrimary,  min: 4.5 },
  { name: "textBase on bgSurface (light)",      fg: COLORS.textBase,      bg: COLORS.bgSurface,     min: 4.5 },
  // Dark mode
  { name: "textBase on bgBase (dark)",          fg: COLORS.dark.textBase, bg: COLORS.dark.bgBase,   min: 4.5 },
  { name: "textMuted on bgBase (dark)",         fg: COLORS.dark.textMuted,bg: COLORS.dark.bgBase,   min: 4.5 },
  { name: "textBase on bgSurface (dark)",       fg: COLORS.dark.textBase, bg: COLORS.dark.bgSurface,min: 4.5 },
];

for (const { name, fg, bg, min } of contrastPairs) {
  const ratio = hex(fg, bg);
  if (ratio < min) {
    console.warn(`[contrast] FAIL "${name}": ${ratio.toFixed(2)}:1 (min ${min}:1) — fix COLORS in src/config.ts`);
  }
}

// https://astro.build/config
export default defineConfig({
  site: SITE.url,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),
  ],
});
