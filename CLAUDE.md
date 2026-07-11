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

All colors live in `src/config.ts` → `COLORS`. A Vite plugin in `astro.config.mjs` injects them into `global.css` at build time as CSS custom properties. **Never hardcode colors anywhere else** — including named Tailwind colors (`bg-white`, `bg-black`) and `rgba()`/hex literals; every color, including UI chrome like the modal backdrop scrim (`COLORS.overlay`), goes through a token.

`COLORS.dark` is **optional** — single-theme templates can omit it entirely; `generateColorTokens()` skips the `.dark {}` CSS block when it's absent, and `scripts/contrast-check.mjs` skips dark-mode pairs the same way. Pair this with `SITE.singleTheme = true` in `config.ts`, which skips the FOUC-prevention script and dark `theme-color` meta in `BaseLayout.astro`.

### Icons

All icons are [line-md](https://icon-sets.iconify.design/line-md/) via `astro-icon` (`import { Icon } from "astro-icon/components"`, `<Icon name="line-md:..." />`) — inlined at build time, zero runtime JS. Icons inserted at runtime via plain DOM APIs (e.g. `Toast.astro`'s dismiss icons) can't use `<Icon>` since it only resolves at build time — embed the SVG markup as a string literal instead.

### WCAG AA enforcement

`scripts/contrast-check.mjs` checks color pairs at build time. Locally: warns. In CI (`CI=true`): throws and blocks the build. Run standalone with `pnpm check:contrast`.

### CSS strategy

`cssCodeSplit: false` in Vite config — all CSS lands in one file, preventing render-blocking component CSS chunks.

### Release automation

`.github/workflows/release-please.yml` is configured to auto-merge the standing release PR once its own CI run passes. This requires a `RELEASE_PLEASE_TOKEN` repo secret — PRs/merges made with the default `GITHUB_TOKEN` don't trigger downstream workflows, which would otherwise leave the required CI check permanently pending.

## Commands

```bash
pnpm dev            # dev server
pnpm build          # production build (runs contrast checks)
pnpm type-check     # astro check
pnpm format         # prettier
pnpm check:contrast # WCAG contrast check standalone
```

## Component locations

- `src/components/ui/` — Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, CodeWindow, Combobox, Divider, Drawer, Dropdown, FormField, IconButton, Input, Modal, Pagination, Progress, Select, Skeleton, Spinner, Stepper, Table, Tabs, Textarea, Toast, Toggle, Tooltip
- `src/components/layout/` — Container, Section
- `src/components/sections/` — page-level sections (hero, pricing, testimonials, …) composed from `ui/` + `layout/` — see CONTRIBUTING.md for the convention
- `src/components/global/` — Header, Footer, ThemeToggle (**not** wired into Header automatically — add it via `<Header><ThemeToggle slot="nav-end" /></Header>`)
- `src/components/showcase/` — `/ui` page demo sections — **delete when using as project base**
- `src/utils/` — `aria.ts`, `fieldStyles.ts` — shared helpers for the form components (Input, Select, Textarea, Combobox)

## Pages

- `src/pages/index.astro` — főoldal
- `src/pages/ui.astro` — komponens showcase (`/ui`)
- `src/pages/404.astro` — 404 oldal
- `src/pages/robots.txt.ts` — dinamikus robots.txt

## What NOT to touch

- `src/styles/global.css` — the `/* @inject-color-tokens */` marker is replaced at build time; do not edit the generated block
- `dist/` — build output, git-ignored
