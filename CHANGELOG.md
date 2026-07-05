# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0](https://github.com/zsoltrigler/core-boilerplate-astro/releases/tag/v1.0.0) (2026-07-05)

### Features

* initial core boilerplate — Astro SSG, Tailwind CSS v4, TypeScript strict mode ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
* core enhancements — single-source config, components, SEO, sitemap ([2f9560e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f9560e))
* WCAG AA contrast checks at build time — warns locally, throws in CI ([1b97fdf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1b97fdf))
* dynamic robots.txt, scroll-margin anchor fix, mobile nav ([4c5515e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4c5515e))
* UI component library — Button, Badge, Card, Alert, Section, Container ([c3c9183](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3c9183))
* named slots for Card and Alert, barrel exports for ui/ and layout/ ([a96bbe0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a96bbe0))
* fully parametrizable UI components — every visual decision is a prop ([60584f4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/60584f4))
* SITE.showName toggle — control logo/name display independently ([21c74a6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/21c74a6))
* social icon support in Footer and default social links with SVG icons ([2f44ca6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f44ca6))
* IconButton component — square icon-only button with required aria-label ([b074739](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b074739))
* Button supports icon-left and icon-right named slots ([32a46fc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/32a46fc))
* proper landing page + separate /ui component library page ([1dd712d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1dd712d))
* skip to content link for keyboard accessibility ([666abc2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/666abc2))
* Input component — label, hint, error state, size variants ([6c5b024](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6c5b024))
* Modal component — native dialog, backdrop, size variants ([d5d2592](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d5d2592))
* Select, Checkbox, Textarea, Tabs, Toast, Breadcrumb components ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* add favicon field to SITE config ([0eb8292](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0eb8292))
* component preview section on home page ([14072e1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/14072e1))
* active state tracking in /ui sidebar nav ([a939a13](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a939a13))
* add aria-label prop to Checkbox for label-less usage ([35e0df0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/35e0df0))
* replace manual syntax spans with Shiki Code component ([a79e51d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a79e51d))
* JSON-LD structured data support, og:locale, og:image:alt ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3))
* OG locale map extracted to config — add new langs in one place ([dbfa0e7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dbfa0e7))

### Bug Fixes

* review fixes — OG image URL, SEO warnings, footer i18n ([917129f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/917129f))
* accessibility — contrast ratio and heading order ([b6828b1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b6828b1))
* single source of truth for color tokens — CSS custom properties ([a3e107c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a3e107c))
* persist dark class across page loads ([ea35062](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ea35062))
* spread rest props on Button so data-* attributes pass through to DOM ([c6999b9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c6999b9))
* OG image switched from SVG to JPG for social platform compatibility ([48e2297](https://github.com/zsoltrigler/core-boilerplate-astro/commit/48e2297))
* OG image URL resolved dynamically per environment ([c3729b7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3729b7))
* replace hardcoded hex colors in 404 page with design tokens ([c100aba](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c100aba))
* use aria-disabled and pointer-events-none for disabled link buttons ([5315a91](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5315a91))
* dark brandPrimary WCAG check, PNG favicon fallback, SOCIAL_LINKS warning ([dffedf7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dffedf7))
* fix WCAG contrast failures on status colors ([7c2ef99](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7c2ef99))
* fix WCAG contrast failures in Badge, Alert and Danger button ([ef2827d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ef2827d))
* prevent XSS in Toast by building DOM nodes instead of innerHTML ([f75d30b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f75d30b))
* smooth dark mode transition via @property color token registration ([3b04089](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3b04089))
* remove Disallow /ui/ from robots.txt — noindex meta tag is sufficient ([3afe630](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3afe630))
* block CI on placeholder description, robots.txt localhost guard ([11fdbd3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/11fdbd3))
* escape HTML-special chars in JSON-LD output to prevent XSS ([cab61d7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cab61d7))
* harden JSON-LD escaping — single-pass regex, og:image:alt always present ([1846443](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1846443))
* ensure JSON-LD @context cannot be overridden by caller ([5c60d89](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5c60d89))
* warn in dev when lang has no og:locale mapping ([4535771](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4535771))
* use URL hostname parsing for localhost detection in robots.txt ([2f8260f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f8260f))
* add CommonJS globals to ESLint config for .cjs files ([e6c2230](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e6c2230))

### Performance Improvements

* disable CSS code splitting — eliminates render-blocking CSS chunks ([fd9cae7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/fd9cae7))

### Code Refactoring

* extract hero and features into self-contained section components ([43cbde8](https://github.com/zsoltrigler/core-boilerplate-astro/commit/43cbde8))
* remove View Transitions (ClientRouter) — simpler and more compatible ([902d6a3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/902d6a3))
* extract CodeWindow component, replace 15 inline chrome blocks ([82129dc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/82129dc))
* extract ShowcaseSection component, replace boilerplate in 13 files ([5077765](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5077765))
* extract aria-describedby builder into shared utility ([6620d08](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6620d08))
* extract WCAG contrast checks into standalone script ([50a74b0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/50a74b0))
* split ui.astro into per-component showcase files ([88af602](https://github.com/zsoltrigler/core-boilerplate-astro/commit/88af602))
* move localeMap to config, simplify JSON-LD escaping and robots.txt ([dbfa0e7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dbfa0e7))

### Documentation

* add CONTRIBUTING.md with setup, branch, and code standards ([b021a17](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b021a17))
* add JSON-LD documentation and BaseLayout prop reference to README ([4804c46](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4804c46))
* update README — remove View Transitions, add missing components, expand CI section ([3eddd3e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3eddd3e))

### Miscellaneous Chores

* add GitHub Actions CI pipeline with type check, lint, and build ([be45139](https://github.com/zsoltrigler/core-boilerplate-astro/commit/be45139))
* add ESLint with TypeScript and Astro plugin ([99b8abf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/99b8abf))
* add Lighthouse CI — enforces SEO and best-practices at 1.0 ([ebfbc8f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ebfbc8f))
* add Prettier with Astro and Tailwind plugins ([a6d1ad0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a6d1ad0))
* add VS Code recommended extensions for Astro + Tailwind + TypeScript stack ([af8dd95](https://github.com/zsoltrigler/core-boilerplate-astro/commit/af8dd95))
* add LICENSE, README, and remove stale package-lock.json ([aa17c4e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/aa17c4e))
* prepare repo for public release ([96ea1ae](https://github.com/zsoltrigler/core-boilerplate-astro/commit/96ea1ae))
* add CLAUDE.md with project architecture and development guidelines ([f9c03c0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f9c03c0))
