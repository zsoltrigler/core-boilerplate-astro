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
│   └── ui/         # Button, Badge, Card, Alert, IconButton
├── layouts/        # BaseLayout.astro
├── pages/          # index.astro, ui.astro, 404.astro
├── styles/         # global.css
└── config.ts       # single source of truth for all site config
```
