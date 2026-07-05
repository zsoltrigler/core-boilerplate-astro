# Core Boilerplate — Claude Instructions

## Project overview

Production-ready Astro 7 + Tailwind 4 boilerplate. Free marketing tool for a premium template business. Every decision optimises for: 100/100 Lighthouse, WCAG AA enforced at build time, and clean DX for developers who clone it.

## Stack

- **Astro 7** (SSG, View Transitions)
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **TypeScript** (strict mode)
- **pnpm** (package manager)

## Key architecture decisions

### Color tokens

All colors live in `src/config.ts` → `COLORS`. A Vite plugin in `astro.config.mjs` injects them into `global.css` at build time as CSS custom properties. **Never hardcode colors anywhere else.**

### WCAG AA enforcement

`scripts/contrast-check.mjs` checks 24 color pairs at build time. Locally: warns. In CI (`CI=true`): throws and blocks the build. Run standalone with `pnpm check:contrast`.

### CSS strategy

`cssCodeSplit: false` in Vite config — all CSS lands in one file, preventing render-blocking component CSS chunks.

## Commands

```bash
pnpm dev           # dev server
pnpm build         # production build (runs contrast checks)
pnpm type-check    # astro check
pnpm format        # prettier
pnpm check:contrast # WCAG contrast check standalone
```

## Component locations

- `src/components/ui/` — reusable UI components (Button, Badge, Alert, Input, Card, Modal, IconButton)
- `src/components/layout/` — layout primitives (Section, Container)
- `src/components/global/` — site-wide (Header, Footer, ThemeToggle)
- `src/components/showcase/` — `/ui` page demo sections — **delete when using as project base**

## File conventions

- Better Comments: `* ` info, `! ` warning, `? ` question, `TODO:` todo
- Blank lines between sibling HTML elements in Astro templates
- Prettier formats on save (`.vscode/settings.json`)

## What NOT to touch

- `src/styles/global.css` — the `/* @inject-color-tokens */` marker is replaced at build time; do not edit the generated block
- `dist/` — build output, git-ignored

## Branch naming

`feat/`, `fix/`, `chore/`, `docs/`, `refactor/`, `style/`

## PR template structure

Every PR body must follow this exact order — template is in `.github/PULL_REQUEST_TEMPLATE.md`:

1. **Summary** — 1–3 bullet points: what changed and why
2. **Type of change** — checkbox: `feat` / `fix` / `chore` / `docs` / `refactor` / `style`
3. **Breaking changes** — explicit yes/no; default `None.` if nothing breaks
4. **Test plan** — concrete checkbox steps a reviewer can reproduce
5. **Screenshots** — Before/After for UI changes; delete section if not applicable
6. **Checklist** — `pnpm type-check`, `pnpm build`, Prettier, Better Comments, no hardcoded colors
