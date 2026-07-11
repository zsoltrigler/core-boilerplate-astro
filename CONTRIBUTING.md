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

## Colors and design tokens

Edit colors **only** in `src/config.ts`. They are injected into CSS at build time — never edit the generated `@theme` block in `global.css` directly.

WCAG AA contrast is checked automatically at build time. Fix any warnings before opening a PR.

## Pull requests

- Open a PR against `main`
- Keep each PR focused on a single topic
- The CI pipeline must pass before merging
- PRs are merged by the maintainer — do not self-merge

## Project structure

```
src/
├── components/
│   ├── global/     # Header, Footer, ThemeToggle
│   ├── layout/     # Section, Container
│   ├── sections/   # Page sections composed from ui/ + layout/ primitives
│   └── ui/         # Alert, Badge, Breadcrumb, Button, Card, Checkbox,
│                   # CodeWindow, IconButton, Input, Modal, Select,
│                   # Tabs, Textarea, Toast
├── layouts/        # BaseLayout.astro
├── pages/          # index.astro, ui.astro, 404.astro
├── styles/         # global.css
├── utils/          # aria.ts — shared accessibility utilities
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
