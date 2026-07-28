# Brand assets

Drop your logo here as `logo.png`, `logo.svg`, `logo.jpg`, or any other image format Astro's asset pipeline supports — e.g. `logo.png`.

`Header.astro` picks it up automatically via `import.meta.glob` and renders it through Astro's `<Image>` component: responsive `srcset` (1x/2x), automatic format conversion (e.g. PNG → WebP), and no code changes required.

This takes priority over `SITE.logo` in `src/config.ts`. If you'd rather keep your logo in `public/` under a different name, leave this folder empty and set `SITE.logo` instead — see the main [README](../../../README.md#site-settings) for details.
