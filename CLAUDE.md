# Core Boilerplate — Claude Instructions

## Project overview

Production-ready Astro 7 + Tailwind 4 boilerplate. Free marketing tool for a premium template business. Every decision optimises for: 100/100 Lighthouse, WCAG AA enforced at build time, and clean DX for developers who clone it.

## Stack

- **Astro 7** (SSG)
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **TypeScript** (strict mode)
- **pnpm** (package manager)

## Key architecture decisions

### Color tokens

All colors live in `src/config.ts` → `COLORS`. A Vite plugin in `astro.config.mjs` injects them into `global.css` at build time as CSS custom properties. **Never hardcode colors anywhere else.**

### WCAG AA enforcement

`scripts/contrast-check.mjs` checks color pairs at build time. Locally: warns. In CI (`CI=true`): throws and blocks the build. Run standalone with `pnpm check:contrast`.

### CSS strategy

`cssCodeSplit: false` in Vite config — all CSS lands in one file, preventing render-blocking component CSS chunks.

## Commands

```bash
pnpm dev            # dev server
pnpm build          # production build (runs contrast checks)
pnpm type-check     # astro check
pnpm format         # prettier
pnpm check:contrast # WCAG contrast check standalone
```

## Component locations

- `src/components/ui/` — Alert, Badge, Breadcrumb, Button, Card, Checkbox, CodeWindow, IconButton, Input, Modal, Select, Tabs, Textarea, Toast
- `src/components/layout/` — Container, Section
- `src/components/global/` — Header, Footer, ThemeToggle
- `src/components/showcase/` — `/ui` page demo sections — **delete when using as project base**

## Pages

- `src/pages/index.astro` — főoldal
- `src/pages/ui.astro` — komponens showcase (`/ui`)
- `src/pages/404.astro` — 404 oldal
- `src/pages/robots.txt.ts` — dinamikus robots.txt

## What NOT to touch

- `src/styles/global.css` — the `/* @inject-color-tokens */` marker is replaced at build time; do not edit the generated block
- `dist/` — build output, git-ignored
