# Core Boilerplate

![CI](https://github.com/zsoltrigler/core-boilerplate-astro/actions/workflows/ci.yml/badge.svg)

A minimal, production-ready starter built with **Astro 7** and **Tailwind CSS 4**. Everything you need to start a new project — nothing you don't.

## Stack

- [Astro 7](https://astro.build) — static site generator (SSG)
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

## After cloning

Before you start building, do these four things:

1. **Edit `src/config.ts`** — set your site name, description, colors, nav links, and social links.
2. **Replace `public/og-default.jpg`** — 1200×630px JPG or PNG, used when sharing on social media.
3. **Replace the favicon** — swap out `public/favicon.svg` (and the `.ico` / `.png` variants) with your own.
4. **Delete the component showcase** — remove `src/pages/ui.astro` and `src/components/showcase/` when you no longer need the reference.

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
  { label: "GitHub", href: "https://github.com/you/your-repo" },
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
│       ├── Breadcrumb.astro   # Accessible navigation trail
│       ├── Button.astro       # Primary/secondary/ghost/danger, renders as <a> or <button>
│       ├── Card.astro         # Content container with icon/title/desc slots
│       ├── Checkbox.astro     # Checkbox with label, hint, and error state
│       ├── CodeWindow.astro   # Decorative code window UI frame
│       ├── IconButton.astro   # Square icon-only button
│       ├── Input.astro        # Text input with label, hint, error, and size variants
│       ├── Modal.astro        # Native <dialog>-based modal with backdrop and slots
│       ├── Select.astro       # Select dropdown with label, hint, and error state
│       ├── Tabs.astro         # Keyboard-navigable tab panel
│       ├── Textarea.astro     # Multiline input with label, hint, and error state
│       └── Toast.astro        # Programmatic toast notifications
├── layouts/
│   └── BaseLayout.astro       # HTML shell: meta tags, OG, dark mode
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

### Checkbox

Checkbox with label, hint text, and error state.

```astro
<Checkbox name="agree" label="I agree to the terms" required />
<Checkbox name="subscribe" label="Subscribe to newsletter" hint="You can unsubscribe anytime" />
<Checkbox name="accept" label="Accept" error="You must accept to continue" />
```

**Props:** `name` · `id` · `label` · `hint` · `error` · `checked` · `disabled` · `required` · `fullWidth`

---

### Select

Dropdown select with label, hint text, and error state.

```astro
<Select name="country" label="Country" placeholder="Choose a country">
  <option value="hu">Hungary</option>
  <option value="de">Germany</option>
</Select>
```

**Props:** `name` · `id` · `label` · `aria-label` · `placeholder` · `hint` · `error` · `size` (sm | md | lg) · `disabled` · `required` · `fullWidth`

---

### Textarea

Multiline text input with label, hint text, and error state.

```astro
<Textarea name="message" label="Message" placeholder="Your message..." rows={5} required />
<Textarea name="bio" label="Bio" hint="Max 200 characters" error="Bio is required" />
```

**Props:** `name` · `id` · `label` · `placeholder` · `value` · `rows` · `hint` · `error` · `disabled` · `required` · `fullWidth`

---

### Tabs

Keyboard-navigable tab panel.

```astro
<Tabs
  tabs={[
    { id: "tab-1", label: "First" },
    { id: "tab-2", label: "Second" },
  ]}
>
  <div data-tab="tab-1">First tab content</div>
  <div data-tab="tab-2">Second tab content</div>
</Tabs>
```

**Props:** `tabs` (array of `{ id, label }`) · `defaultTab`

---

### Toast

Programmatic toast notifications. Add `<Toast />` once to your layout, then trigger it from any script.

```astro
<!-- In your layout -->
<Toast />
```

```ts
// Trigger from any script
window.dispatchEvent(
  new CustomEvent("toast", {
    detail: { message: "Saved!", variant: "success" },
  })
)
```

**Event detail:** `message` · `variant` (info | success | warning | error) · `duration` (ms, default 4000)

---

### Breadcrumb

Accessible navigation trail with structured markup.

```astro
<Breadcrumb
  items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Post title" }]}
/>
```

**Props:** `items` (array of `{ label, href? }`) · `aria-label`

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
  ogImageAlt="A short description of the OG image for screen readers"
  ogType="article"
  noindex={false}
  jsonLd={{
    "@type": "WebSite",
    name: "My Site",
    url: "https://example.com",
  }}
>
  <!-- page content -->
</BaseLayout>
```

**Props:** `title` · `description` · `canonicalUrl` · `ogImage` · `ogImageAlt` · `ogType` · `ogLocale` · `publishedDate` · `modifiedDate` · `author` · `noindex` · `lang`

| Prop         | Type     | Default | Description                                                                                                                                                           |
| ------------ | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ogImageAlt` | `string` | —       | Alt text for the OG image. Shown by screen readers and some social platforms (e.g. LinkedIn).                                                                         |
| `ogLocale`   | `string` | auto    | OG locale in `language_REGION` format (e.g. `"en_US"`). Auto-derived from the `lang` prop — only set this if you need to override it.                                 |
| `jsonLd`     | `object` | —       | Any [schema.org](https://schema.org) object. The `@context` is added automatically. Common types: `WebSite`, `Article`, `Product`, `LocalBusiness`, `BreadcrumbList`. |

**Slot:** `head` — inject extra `<link>` or `<script>` tags per page.

### JSON-LD example — Article page

```astro
<BaseLayout
  title="How to bake sourdough"
  ogType="article"
  publishedDate="2024-06-01"
  jsonLd={{
    "@type": "Article",
    headline: "How to bake sourdough",
    datePublished: "2024-06-01",
    author: { "@type": "Person", name: "Jane Doe" },
  }}
/>
```

The layout automatically prepends `"@context": "https://schema.org"` — you only need to pass the object itself.

### JSON-LD at scale — reuse via a shared layout

`jsonLd` is per-page by design: the data (title, author, date) is different on every page. However, you don't have to repeat it in every `.astro` file. The pattern is to wrap `BaseLayout` in a purpose-built layout and pass the data down as props:

```astro
---
// src/layouts/BlogPostLayout.astro
import BaseLayout from "./BaseLayout.astro"

interface Props {
  title: string
  author: string
  publishedDate: string
}

const { title, author, publishedDate } = Astro.props
---

<BaseLayout
  title={title}
  ogType="article"
  publishedDate={publishedDate}
  jsonLd={{
    "@type": "Article",
    headline: title,
    datePublished: publishedDate,
    author: { "@type": "Person", name: author },
  }}
>
  <slot />
</BaseLayout>
```

Every blog post then uses `BlogPostLayout` instead of `BaseLayout` directly — JSON-LD is generated automatically with no repetition:

```astro
---
// src/pages/blog/sourdough.astro
import BlogPostLayout from "../../layouts/BlogPostLayout.astro"
---

<BlogPostLayout title="How to bake sourdough" author="Jane Doe" publishedDate="2024-06-01">
  <!-- post content -->
</BlogPostLayout>
```

Apply the same pattern to product pages (`ProductLayout`), landing pages, or any repeated page type.

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

1. **Lint** — ESLint
2. **Type check** — `pnpm exec astro check`
3. **Build** — `pnpm build` (includes WCAG AA contrast check — fails on violation)
4. **Lighthouse CI** — performance ≥ 0.85, accessibility ≥ 0.96, best-practices = 1.0, SEO = 1.0

The `main` branch is protected — merging requires a passing CI run and an open pull request.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions, branch naming conventions, code standards, and the PR process.

---

## Deployment

Push to your repo — Vercel, Netlify, Cloudflare Pages, Railway and any other static host detect Astro automatically.

Set one environment variable in your platform's dashboard:

```
SITE_URL=https://your-domain.com
```

This is used for the sitemap and robots.txt. Without it, those files fall back to `http://localhost:4321` — everything else (OG tags, canonical URLs) works correctly at runtime without it.

### Manual build

```bash
pnpm build    # outputs to dist/
pnpm preview  # preview the build locally
```

---

## License

[MIT](./LICENSE) — free to use, modify, and distribute.
