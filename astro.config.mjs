// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Import site URL from config — only one place to change
import { SITE } from './src/config.ts';

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
