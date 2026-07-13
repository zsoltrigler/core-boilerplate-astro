# Contributing to Core Boilerplate

Thank you for your interest in contributing. This document covers everything you need to get started.

## Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/) 11+ (`npm install -g pnpm`)

## Setup

```bash
git clone https://github.com/zsoltrigler/core-boilerplate-astro.git
cd core-boilerplate-astro
pnpm install
pnpm dev
```

## Branch naming

| Prefix      | When to use                               |
| ----------- | ----------------------------------------- |
| `feat/`     | New user-facing feature                   |
| `fix/`      | Bug fix                                   |
| `chore/`    | Tooling, config, build, dependencies      |
| `docs/`     | Documentation only                        |
| `refactor/` | Code rewrite without functional change    |
| `style/`    | Formatting or visual change without logic |

**One topic per branch.** If a branch is still open, add related commits to it instead of opening a new one.

## Commit messages

- Written in **English**
- Descriptive and specific — no generic placeholders
- Follow the same prefix convention as branches

```
feat: add Tooltip component with keyboard support
fix: correct contrast ratio on dark mode badge
chore: update Tailwind to v4.1
```

## Code standards

- **Prettier** — all files must be formatted according to `.prettierrc`. Format on save is configured in `.vscode/settings.json`.
- **TypeScript** — strict mode is enabled. All component props must be typed via an exported `Props` interface.
- **Comments** — use the [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) convention:
  - `// * ` important note
  - `// ! ` warning or critical constraint
  - `// ? ` open question or consideration
  - `// TODO:` future improvement
- **Blank lines** — always add a blank line between sibling HTML elements.
- **Icons** — use `astro-icon` with the [line-md](https://icon-sets.iconify.design/line-md/) set (`<Icon name="line-md:..." />` from `"astro-icon/components"`). Never hand-write inline `<svg>` markup for a new icon; only fall back to a raw SVG string when the icon must be inserted at runtime via plain DOM APIs (e.g. `Toast.astro`'s dismiss icons), since `<Icon>` only resolves at build time.

## Colors and design tokens

Edit colors **only** in `src/config.ts`. They are injected into CSS at build time — never edit the generated `@theme` block in `global.css` directly. Never hardcode a color anywhere else, including named Tailwind colors (`bg-white`, `bg-black`) and `rgba()`/hex literals — even UI chrome like the modal backdrop scrim goes through a token (`COLORS.overlay`).

`COLORS.dark` is optional — single-theme templates can omit it entirely (pair with `SITE.singleTheme = true`, which skips the FOUC-prevention script and dark `theme-color` meta in `BaseLayout.astro`). If you touch `scripts/contrast-check.mjs`, keep dark-mode pairs guarded behind a `COLORS.dark` check so it doesn't crash for single-theme configs.

WCAG AA contrast is checked automatically at build time. Fix any warnings before opening a PR.

## Testing

- **Vitest** (`pnpm test`) — unit tests for framework-agnostic logic in `src/utils/` (e.g. `aria.ts`, `fieldStyles.ts`). Add a `*.test.ts` file next to any new pure-logic utility.
- **Playwright** (`pnpm test:e2e`) — cross-browser (Chromium, Firefox, WebKit) interaction tests, in `tests/e2e/`, for every JS-powered component (`Modal`, `Drawer`, `Dropdown`, `Tabs`, `Toast`, `Combobox`, `ThemeToggle`). These drive the real `/ui` showcase page in a real browser rather than mocking the DOM — Astro's inline component `<script>` blocks rely on native browser APIs (`<dialog>`, focus, `astro:page-load`) that jsdom doesn't faithfully emulate. When you add a new interactive component, add its spec here instead of reaching for Vitest + jsdom.
- Both suites run in CI on every PR. Run `pnpm exec playwright install --with-deps chromium firefox webkit` once locally before your first `pnpm test:e2e`.

## Pull requests

- Open a PR against `main`
- Keep each PR focused on a single topic
- The CI pipeline must pass before merging
- PRs are merged by the maintainer — do not self-merge
- The one exception is the standing release-please PR, which auto-merges itself once its own CI run passes — this is the only PR that isn't human-merged

## Project structure

```
src/
├── components/
│   ├── global/     # Header, Footer, ThemeToggle
│   ├── layout/     # Section, Container
│   ├── sections/   # Page sections composed from ui/ + layout/ primitives
│   └── ui/         # Accordion, Alert, Avatar, Badge, Breadcrumb, Button,
│                   # Card, Checkbox, CodeWindow, Combobox, Divider, Drawer,
│                   # Dropdown, FormField, IconButton, Input, Modal,
│                   # Pagination, Progress, Select, Skeleton, Spinner,
│                   # Stepper, Table, Tabs, Textarea, Toast, Toggle, Tooltip
├── layouts/        # BaseLayout.astro
├── pages/          # index.astro, ui.astro, 404.astro
├── styles/         # global.css
├── utils/          # aria.ts, fieldStyles.ts — shared helpers for form components
└── config.ts       # single source of truth for all site config
```

## Building page sections

`src/components/sections/` is where page-level sections live (hero, pricing,
testimonials, FAQ, etc.) — one `.astro` file per section, composed from the
`ui/` and `layout/` primitives. Don't hand-roll markup that a primitive
already covers (see "Code standards" above); a section file should mostly be
`<Section>` / `<Container>` scaffolding plus `ui/` components wired to props.

```
src/components/sections/
├── Hero.astro
├── Pricing.astro
├── Testimonials.astro
└── Faq.astro
```

- One section per file, PascalCase, named after what it shows (`Pricing.astro`, not `Section3.astro`).
- Accept content via a typed `Props` interface (title, items, etc.) rather than hardcoding copy — the same section should be reusable across templates with different content.
- If a section is only ever used on one page, it's still worth extracting once the page file gets long — keeps `pages/*.astro` readable.

**Gotcha: components with dynamic named slots.** `Tabs` renders one
`<slot name={tab.id} />` per entry in its `tabs` prop — the slot name is
whatever `id` you gave that tab, not a fixed set like `"header"` or
`"footer"`. The caller must tag each content block with a matching
`slot="<id>"` attribute:

```astro
<Tabs
  tabs={[
    { id: "overview", label: "Overview" },
    { id: "specs", label: "Specs" },
  ]}
>
  <p slot="overview">...</p>
  <p slot="specs">...</p>
</Tabs>
```

There's no compile-time check tying `tabs` to your slots — a typo'd or
renamed `id` just renders an empty panel with no error. Keep the `tabs`
array and the slotted content next to each other in the file so they're
easy to eyeball together, and grep for the `id` string when you rename one.
