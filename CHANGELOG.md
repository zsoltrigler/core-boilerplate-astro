# Changelog

All notable changes to this project will be documented in this file.

## [1.5.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.4.0...v1.5.0) (2026-07-05)

### Miscellaneous Chores

* add Lighthouse CI config — enforces SEO and best-practices at 1.0 on every CI run ([ebfbc8f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ebfbc8f))
* add CommonJS globals to ESLint config for .cjs files ([e6c2230](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e6c2230))

### Code Refactoring

* move OG locale map to config, simplify JSON-LD escaping and robots.txt ([dbfa0e7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dbfa0e7))

### Bug Fixes

* harden JSON-LD escaping — single-pass regex, og:image:alt always present ([1846443](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1846443))
* ensure JSON-LD @context cannot be overridden by caller ([5c60d89](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5c60d89))
* warn in dev when lang has no og:locale mapping ([4535771](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4535771))
* use URL hostname parsing for localhost detection in robots.txt ([2f8260f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f8260f))

---

## [1.4.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.3.0...v1.4.0) (2026-07-05)

### Features

* JSON-LD structured data support via `jsonLd` prop on BaseLayout ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3))
* og:locale auto-derived from `lang` prop with configurable locale map ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3))
* og:image:alt prop on BaseLayout — shown by screen readers and LinkedIn ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3))

### Bug Fixes

* escape HTML-special chars in JSON-LD output to prevent XSS ([cab61d7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cab61d7))
* block CI on placeholder description — throws in CI, warns locally ([11fdbd3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/11fdbd3))

### Documentation

* document ogImageAlt, ogLocale, jsonLd props in BaseLayout README section ([4804c46](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4804c46))
* add JSON-LD at scale section — shared layout pattern for blog/product pages ([0eb6fd4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0eb6fd4))
* update README — remove View Transitions, add missing components, expand CI section ([3eddd3e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3eddd3e))

---

## [1.3.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.2.0...v1.3.0) (2026-07-01)

### Features

* replace manual syntax spans with Shiki Code component for accurate syntax highlighting ([a79e51d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a79e51d))

### Code Refactoring

* remove View Transitions (ClientRouter) — simpler, more compatible, no lifecycle overhead ([902d6a3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/902d6a3))
* extract CodeWindow component — replaces 15 identical inline chrome blocks ([82129dc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/82129dc))
* extract ShowcaseSection component — replaces boilerplate in 13 showcase files ([5077765](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5077765))
* extract aria-describedby builder into shared utility ([6620d08](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6620d08))
* extract WCAG contrast checks into standalone script ([50a74b0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/50a74b0))
* split ui.astro into per-component showcase files ([88af602](https://github.com/zsoltrigler/core-boilerplate-astro/commit/88af602))

### Bug Fixes

* prevent XSS in Toast — build DOM nodes instead of innerHTML ([f75d30b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f75d30b))
* smooth dark mode transition via @property color token registration ([3b04089](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3b04089))

### Performance Improvements

* disable CSS code splitting — eliminates render-blocking CSS chunks ([fd9cae7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/fd9cae7))

---

## [1.2.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.1.0...v1.2.0) (2026-07-01)

### Features

* Select component — native select with label, hint, error state, size variants ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Checkbox component — with label, hint, error state and aria-label support ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Textarea component — resizable, with label, hint, error state ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Tabs component — accessible tab panel with keyboard navigation ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Toast component — top-center dismissible notifications ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Breadcrumb component — structured navigation trail with schema.org markup ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* active state tracking in /ui sidebar navigation ([a939a13](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a939a13))
* add aria-label prop to Checkbox for label-less usage ([35e0df0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/35e0df0))

### Miscellaneous Chores

* add ESLint with TypeScript and Astro plugin ([99b8abf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/99b8abf))
* add CLAUDE.md with project architecture and development guidelines ([f9c03c0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f9c03c0))

### Bug Fixes

* fix WCAG contrast failures on status colors ([7c2ef99](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7c2ef99))
* fix WCAG contrast failures in Badge, Alert and Danger button ([ef2827d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ef2827d))
* resolve OG image URL dynamically per environment ([c3729b7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3729b7))
* remove Disallow /ui/ from robots.txt — noindex meta tag is sufficient ([3afe630](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3afe630))
* use aria-disabled and pointer-events-none for disabled link buttons ([5315a91](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5315a91))

---

## [1.1.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.0.0...v1.1.0) (2026-06-25)

### Features

* UI component library — Button, Badge, Card, Alert, Section, Container ([c3c9183](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3c9183))
* fully parametrizable UI components — every visual decision is a prop ([60584f4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/60584f4))
* named slots for Card and Alert, barrel exports for ui/ and layout/ ([a96bbe0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a96bbe0))
* Button supports icon-left and icon-right named slots ([32a46fc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/32a46fc))
* IconButton component — square icon-only button with required aria-label ([b074739](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b074739))
* social icon support in Footer with default SVG social links ([2f44ca6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f44ca6))
* SITE.showName toggle — control logo/name display independently ([21c74a6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/21c74a6))
* Input component — label, hint, error state, size variants ([6c5b024](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6c5b024))
* Modal component — native dialog, backdrop, size variants ([d5d2592](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d5d2592))
* skip to content link for keyboard accessibility ([666abc2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/666abc2))
* separate /ui component library page with sticky sidebar ([1dd712d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1dd712d))
* component preview section on home page ([14072e1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/14072e1))
* add favicon field to SITE config ([0eb8292](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0eb8292))
* OG-inspired dark hero layout ([aaef67f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/aaef67f))

### Bug Fixes

* OG image switched from SVG to JPG for social platform compatibility ([48e2297](https://github.com/zsoltrigler/core-boilerplate-astro/commit/48e2297))
* spread rest props on Button so data-* attributes pass through to DOM ([c6999b9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c6999b9))
* replace hardcoded hex colors in 404 page with design tokens ([c100aba](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c100aba))
* dark brandPrimary WCAG AA check, PNG favicon fallback, SOCIAL_LINKS warning ([dffedf7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dffedf7))
* use AbortController in Modal to prevent listener accumulation ([a9876f8](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a9876f8))
* add CI timeout, fix pnpm version conflict in GitHub Actions ([6c5b024](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6c5b024))

### Miscellaneous Chores

* add GitHub Actions CI pipeline with type check, lint, build, Lighthouse ([be45139](https://github.com/zsoltrigler/core-boilerplate-astro/commit/be45139))
* add Prettier with Astro and Tailwind plugins ([a6d1ad0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a6d1ad0))
* add VS Code recommended extensions for Astro + Tailwind + TypeScript ([af8dd95](https://github.com/zsoltrigler/core-boilerplate-astro/commit/af8dd95))
* add LICENSE, README, and remove stale package-lock.json ([aa17c4e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/aa17c4e))
* prepare repo for public release ([96ea1ae](https://github.com/zsoltrigler/core-boilerplate-astro/commit/96ea1ae))
* add custom grid favicon, default OG image ([f54a4d7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f54a4d7))

### Documentation

* add CONTRIBUTING.md with setup, branch, and code standards ([b021a17](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b021a17))

---

## [1.0.0](https://github.com/zsoltrigler/core-boilerplate-astro/releases/tag/v1.0.0) (2026-06-24)

### Features

* initial core boilerplate — Astro 7 SSG, Tailwind CSS v4, TypeScript strict mode ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
* core enhancements — single-source config, SEO meta tags, sitemap ([2f9560e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f9560e))
* WCAG AA contrast checks at build time — warns locally, throws in CI ([1b97fdf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1b97fdf))
* dynamic robots.txt with sitemap injection, mobile navigation ([4c5515e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4c5515e))
* FOUC-free dark mode with localStorage persistence ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
* single-source color token system — CSS custom properties injected at build time ([a3e107c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a3e107c))
* Header, Footer, ThemeToggle global components ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
* 404 page with brand-styled layout and noindex ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
