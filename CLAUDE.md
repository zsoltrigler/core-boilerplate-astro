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

### Config validation

`scripts/validate-config.mjs` validates `COLORS`, `SITE`, `NAV_LINKS`, and `SOCIAL_LINKS` against a Zod schema at build time (hex color format, non-empty required fields, valid URLs). Unlike the contrast check, this always throws — a malformed config shape is a hard error, not a style nitpick. Run standalone with `pnpm check:config`.

### CSS strategy

`cssCodeSplit: false` in Vite config — all CSS lands in one file, preventing render-blocking component CSS chunks.

### Prefetch

`prefetch: { prefetchAll: true }` in `astro.config.mjs` — every same-origin link prefetches its target HTML on hover/focus by default. Plain `prefetch: true` alone would only add the prefetch script without prefetching anything, since it requires opting in each link via `data-astro-prefetch`; `prefetchAll` is what makes every link opt-in by default (opt a link back out with `data-astro-prefetch="false"`).

### View Transitions — intentionally not used

Astro's `<ClientRouter />` (View Transitions) is not included in `BaseLayout`. Don't add `astro:page-load` event listeners or other View-Transitions-specific re-init logic to component scripts — without the router, that event never fires beyond the initial page load, so it's dead code. If View Transitions are added back in the future, re-audit every component script for idempotent re-init (some rely on one-time DOM flags or module-level state that assumes a single execution).

### Release automation

`.github/workflows/release-please.yml` is configured to auto-merge the standing release PR once its own CI run passes. This requires a `RELEASE_PLEASE_TOKEN` repo secret — PRs/merges made with the default `GITHUB_TOKEN` don't trigger downstream workflows, which would otherwise leave the required CI check permanently pending.

### Project renaming (downstream forks)

release-please anchors its version bump to a `<package.json name>-v<version>` git tag. A downstream project that keeps the full core-boilerplate git history (e.g. `git clone` + an `upstream` remote) and then hand-edits `package.json`'s `name` desyncs that anchor — release-please falls back to the oldest reachable commit and folds the entire inherited history into one release the first time its workflow runs. `scripts/rename-project.mjs` (`pnpm rename`) handles this: it detects the init mode (no git / fresh history / inherited history with old tags) and only creates an anchor tag when the dangerous case applies. See CONTRIBUTING.md → "Renaming this project" for the downstream-facing writeup.

### Lighthouse CI

`.lighthouserc.cjs` boots the project via `astro dev`, not `astro preview` or a static `dist/` serve — those depend on the configured adapter/output mode (`static` vs a server adapter like Vercel/Cloudflare/Node), so a downstream fork adding a server adapter would otherwise break this check. `astro dev` behaves identically regardless of adapter, and this check only audits SEO/best-practices (not performance), so the dev server is sufficient.

### git rerere for downstream forks

`scripts/enable-rerere.mjs` runs from the `prepare` script (every `pnpm install`) and turns on `git config rerere.enabled true` for the clone. `rerere.enabled` is a local, per-clone setting — not version-controlled — so it doesn't propagate to downstream forks on its own; wiring it into `prepare` (already used for Husky) means every clone gets it without an extra manual step. It matters for downstream projects that keep an `upstream` remote, since the same files (`package.json` name/version, `.release-please-manifest.json`) tend to conflict on every upstream merge.

## Commands

```bash
pnpm dev            # dev server
pnpm build          # production build (runs contrast checks)
pnpm type-check     # astro check
pnpm format         # prettier
pnpm check:contrast # WCAG contrast check standalone
pnpm check:config   # config schema validation standalone
pnpm setup          # interactive wizard: name/description/lang/brand color → src/config.ts
pnpm rename         # rename the project safely (package.json name, manifest, release-please tag anchor)
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
