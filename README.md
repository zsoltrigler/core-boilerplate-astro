# Core Boilerplate

![CI](https://github.com/zsoltrigler/core-boilerplate-astro/actions/workflows/ci.yml/badge.svg)

A minimal, production-ready starter built with **Astro 7** and **Tailwind CSS 4**. Everything you need to start a new project — nothing you don't.

## Stack

- [Astro 7](https://astro.build) — static site generator with View Transitions
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first CSS
- TypeScript — strict mode, typed component props
- Dark mode — system preference + manual toggle, persisted in `localStorage`
- SEO — meta tags, Open Graph, Twitter Card, sitemap, robots.txt

---

## Getting started

```bash
# 1. Clone
git clone https://github.com/zsoltrigler/core-boilerplate-astro.git my-project
cd my-project

# 2. Install dependencies
pnpm install

# 3. Start dev server
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## Configuration

**Everything starts in `src/config.ts`.** This is the single source of truth for your site — colors, name, URLs, nav links, and social links are all defined here.

### Site settings

```ts
export const SITE = {
  name: "Your Site Name",
  description: "Your description",
  logo: "", // path to logo image, or leave empty for text-only
  showName: true,
  ogImage: "/og-default.jpg", // default Open Graph image — must be JPG/PNG
  lang: "en",
  allRightsReserved: "All rights reserved.",
}
```

### Brand colors

Colors are defined once in `COLORS` and automatically injected as CSS custom properties (e.g. `--color-brand-primary`, `--color-bg-base`) at build time — no manual CSS editing needed.

```ts
export const COLORS = {
  brandPrimary: "#4f46e5", // change this to your brand color
  // ... light mode tokens
  dark: {
    brandPrimary: "#6366f1", // dark mode override
    // ...
  },
}
```

> **WCAG contrast check** — the build automatically warns you if any color combination fails AA contrast requirements. Fix the colors in `config.ts` and the warning disappears.

### Navigation

```ts
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Docs", href: "https://docs.astro.build" },
]
```

### Social links

```ts
export const SOCIAL_LINKS = [
  { platform: "GitHub", href: "https://github.com/you", label: "GitHub", icon: `<svg .../>` },
]
```

Social links render automatically in the Footer. Each link accepts an optional inline SVG `icon`.

---

## Project structure

```
src/
├── components/
│   ├── global/
│   │   ├── Header.astro       # Sticky header with nav, mobile menu, ThemeToggle
│   │   ├── Footer.astro       # Footer with social links and copyright
│   │   └── ThemeToggle.astro  # Dark/light mode toggle button
│   ├── layout/
│   │   ├── Container.astro    # Max-width wrapper (sm/md/lg/xl/full)
│   │   └── Section.astro      # Semantic section wrapper
│   └── ui/
│       ├── Alert.astro        # Contextual feedback messages
│       ├── Badge.astro        # Inline status labels
│       ├── Button.astro       # Primary/secondary/ghost/danger, renders as <a> or <button>
│       ├── Card.astro         # Content container with icon/title/desc slots
│       ├── IconButton.astro   # Square icon-only button
│       ├── Input.astro        # Text input with label, hint, error, and size variants
│       └── Modal.astro        # Native <dialog>-based modal with backdrop and slots
├── layouts/
│   └── BaseLayout.astro       # HTML shell: meta tags, OG, dark mode, View Transitions
├── pages/
│   ├── index.astro            # Home page — replace with your own content
│   ├── ui.astro               # Component showcase at /ui
│   ├── 404.astro              # Custom 404 page
│   └── robots.txt.ts          # Dynamic robots.txt
├── styles/
│   └── global.css             # Tailwind + design tokens + base styles
└── config.ts                  # ← Start here
```

---

## Components

Visit `/ui` in the dev server to see every component with all its variants and props.

### Button

Renders as `<a>` when `href` is set, otherwise `<button>`.

```astro
<Button variant="primary" size="md" href="/page">Label</Button>
<Button variant="secondary" disabled>Label</Button>
<Button variant="ghost" href="https://..." external>External ↗</Button>
```

**Props:** `variant` (primary | secondary | ghost | danger) · `size` (sm | md | lg) · `href` · `external` · `disabled` · `fullWidth`

**Slots:** `icon-left` · default · `icon-right`

---

### IconButton

Square icon-only button. `label` is required for accessibility.

```astro
<IconButton label="Close" variant="ghost" size="md">
  <svg ...></svg>
</IconButton>
```

**Props:** `variant` · `size` · `label` · `href` · `external` · `disabled`

---

### Badge

Inline label for status, category, or emphasis.

```astro
<Badge variant="success" size="md" pulse>Live</Badge>
```

**Props:** `variant` (default | primary | success | warning | error | info) · `size` (sm | md | lg) · `pulse`

---

### Alert

Contextual feedback with optional title and dismiss button.

```astro
<Alert variant="info" title="Heads up" dismissible> Your message here. </Alert>
```

**Props:** `variant` (info | success | warning | error) · `title` · `dismissible`

**Slots:** `icon` · `title` · default

---

### Card

Flexible content container.

```astro
<Card title="Card title" desc="Description text." shadow>
  <span slot="icon">🎨</span>
  <!-- any custom content in the default slot -->
</Card>
```

**Props:** `title` · `desc` · `padding` (sm | md | lg) · `rounded` (md | lg | xl | 2xl) · `hover` · `shadow`

**Slots:** `icon` · `title` · `desc` · default

---

### Input

Text input with label, hint text, and error state.

```astro
<Input name="email" type="email" label="Email" placeholder="you@example.com" required />
<Input name="age" type="number" label="Age" value={30} hint="Must be 18 or older" />
<Input name="username" label="Username" error="Username is already taken" />
```

**Props:** `type` (text | email | password | search | url | tel | number) · `name` · `id` · `label` · `placeholder` · `value` · `hint` · `error` · `size` (sm | md | lg) · `disabled` · `required` · `fullWidth`

---

### Modal

Native `<dialog>`-based modal. Open it by adding `data-modal-open="<id>"` to any trigger element. Close it with `data-modal-close` on any element inside the modal — including `<Button>`, since extra props pass through to the rendered element.

```astro
<button data-modal-open="confirm-modal">Open modal</button>

<Modal id="confirm-modal" title="Confirm action" size="md">
  <p>Are you sure you want to continue?</p>
  <div slot="footer">
    <Button data-modal-close variant="secondary">Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </div>
</Modal>
```

**Props:** `id` (required) · `title` · `size` (sm | md | lg | xl)

**Slots:** `title` · default (body) · `footer`

---

### Container

Constrains content width and adds horizontal padding.

```astro
<Container size="md">...</Container>
```

**Sizes:** `sm` = 768px · `md` = 896px · `lg` = 1024px · `xl` = 1280px (default) · `full`

---

### Section

Semantic wrapper, accepts an `id` for anchor links.

```astro
<Section id="features">...</Section>
```

---

## BaseLayout

Every page uses `BaseLayout`. It handles the HTML shell, all meta tags, and dark mode.

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro"
---

<BaseLayout
  title="Page title"
  description="Page description (max ~160 chars)"
  ogImage="/custom-og.jpg"
  ogType="article"
  noindex={false}
>
  <!-- page content -->
</BaseLayout>
```

**Props:** `title` · `description` · `canonicalUrl` · `ogImage` · `ogType` · `publishedDate` · `modifiedDate` · `author` · `keywords` · `noindex` · `lang`

**Slot:** `head` — inject extra `<link>`, `<script>`, or JSON-LD per page.

---

## Dark mode

Dark mode is class-based (`<html class="dark">`). It reads from `localStorage` on first paint (no flash), respects system preference on first visit, and persists the user's choice.

To override any color for dark mode, add it to the `dark` key in `COLORS`:

```ts
dark: {
  bgBase: "#0f172a",
  brandPrimary: "#6366f1",
}
```

Any key omitted from `dark` inherits its light-mode value.

---

## OG image

The default Open Graph image is at `public/og-default.jpg`. It is shown when sharing links on social media (Twitter/X, Slack, LinkedIn, etc.) and is referenced from `SITE.ogImage` in `src/config.ts`.

Replace it with your own image (JPG or PNG, 1200×630px recommended) and update the path in `config.ts`. SVG is not supported by most social platforms.

---

## CI

Every push and pull request targeting `main` runs the CI pipeline automatically:

1. Type check — `pnpm exec astro check`
2. Build — `pnpm build`

The `main` branch is protected — merging requires a passing CI run and an open pull request.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions, branch naming conventions, code standards, and the PR process.

---

## Deployment

### Vercel / Netlify

Push to your repo — both platforms detect Astro automatically. No extra configuration needed.

### Manual build

```bash
pnpm build    # outputs to dist/
pnpm preview  # preview the build locally
```

---

## License

[MIT](./LICENSE) — free to use, modify, and distribute.
