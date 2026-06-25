// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import { SITE, SITE_DEFAULTS } from './src/config.ts';

if (SITE.url === SITE_DEFAULTS.URL) {
  console.warn("[config] SITE.url is still set to the placeholder. Update it in src/config.ts before deploying.");
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
