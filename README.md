# Core Boilerplate

![CI](https://github.com/zsoltrigler/core-boilerplate-astro/actions/workflows/ci.yml/badge.svg)

A minimal, production-ready starter built with **Astro 7** and **Tailwind CSS 4**. Everything you need to start a new project — nothing you don't.

## Stack

- [Astro 7](https://astro.build) — static site generator (SSG)
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first CSS
- TypeScript — strict mode, typed component props
- Icons — [line-md](https://icon-sets.iconify.design/line-md/) via [astro-icon](https://github.com/natemoo-re/astro-icon), inlined at build time — zero runtime JS
- Dark mode — system preference + manual toggle, persisted in `localStorage` — or skip it entirely with `SITE.singleTheme`
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

> **Config validation** — the build validates `COLORS`, `SITE`, `NAV_LINKS`, and `SOCIAL_LINKS` against a schema (hex color format, required fields, valid URLs) and fails immediately with a clear error message if something's wrong — e.g. `COLORS.brandPrimary: must be a hex color like #4f46e5 or #fff`. Run it standalone with `pnpm check:config`.

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

The `dark` key is entirely optional — see [Single-theme templates](#single-theme-templates-no-dark-mode) below. `COLORS.overlay` (defaults to `#000000`) controls the `Modal`/`Drawer` backdrop scrim, kept separate from the dark palette since it looks correct in both themes.

### Typography

`--font-display` is a headline/display font token, separate from `--font-sans` — it defaults to `var(--font-sans)`, so `font-display` works immediately without redefining a fallback chain. Override it in `global.css` when you add a custom display font:

```css
@theme {
  --font-display: "Your Display Font", var(--font-sans);
}
```

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
│   │   └── ThemeToggle.astro  # Dark/light mode toggle — opt-in, not wired into Header
│   ├── layout/
│   │   ├── Container.astro    # Max-width wrapper (sm/md/lg/xl/full)
│   │   └── Section.astro      # Semantic section wrapper
│   ├── sections/               # Page-level sections you add — see CONTRIBUTING.md
│   └── ui/
│       ├── Accordion.astro    # Native <details>/<summary> — no JS
│       ├── Alert.astro        # Contextual feedback messages
│       ├── Avatar.astro       # Image with initials fallback
│       ├── Badge.astro        # Inline status labels
│       ├── Breadcrumb.astro   # Accessible navigation trail
│       ├── Button.astro       # Primary/secondary/ghost/danger, renders as <a> or <button>
│       ├── Card.astro         # Content container with icon/title/desc slots
│       ├── Checkbox.astro     # Checkbox with label, hint, and error state
│       ├── CodeWindow.astro   # Decorative code window UI frame
│       ├── Combobox.astro     # Text input + native <datalist> filtering
│       ├── Divider.astro      # Horizontal/vertical rule, optional label
│       ├── Drawer.astro       # Edge-anchored sliding panel
│       ├── Dropdown.astro     # JS-powered menu panel
│       ├── FormField.astro    # Shared label/error/hint chrome for form controls
│       ├── IconButton.astro   # Square icon-only button
│       ├── Input.astro        # Text input with label, hint, error, and size variants
│       ├── Modal.astro        # Native <dialog>-based modal with backdrop and slots
│       ├── Pagination.astro   # Page number links with prev/next
│       ├── Progress.astro     # Progress bar
│       ├── Select.astro       # Select dropdown with label, hint, and error state
│       ├── Skeleton.astro     # Loading placeholder block
│       ├── Spinner.astro      # Loading spinner
│       ├── Stepper.astro      # Multi-step progress indicator
│       ├── Table.astro        # Styled wrapper for native table markup
│       ├── Tabs.astro         # Keyboard-navigable tab panel
│       ├── Textarea.astro     # Multiline input with label, hint, and error state
│       ├── Toast.astro        # Programmatic toast notifications
│       ├── Toggle.astro       # Switch / checkbox alternative
│       └── Tooltip.astro      # CSS-only tooltip on hover/focus
├── layouts/
│   └── BaseLayout.astro       # HTML shell: meta tags, OG, dark mode
├── pages/
│   ├── index.astro            # Home page — replace with your own content
│   ├── ui.astro               # Component showcase at /ui — delete when done referencing it
│   ├── 404.astro              # Custom 404 page
│   └── robots.txt.ts          # Dynamic robots.txt
├── styles/
│   └── global.css             # Tailwind + design tokens + base styles
├── utils/                      # aria.ts, fieldStyles.ts — shared helpers for form components
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

### CodeWindow

Decorative code-window UI frame — the traffic-light dots and tab bar seen throughout `/ui` and this README's own examples.

```astro
<CodeWindow label="Terminal">
  <pre><code>pnpm install</code></pre>
</CodeWindow>
```

**Props:** `label` (required)

**Slot:** default

---

### FormField

Shared label/error/hint chrome used internally by `Input`, `Select`, `Textarea`, and `Combobox` — you generally won't reach for this directly unless you're building a custom form control that should look consistent with the rest.

```astro
<FormField id="custom-field" label="Custom field" hint="Some helper text">
  <input id="custom-field" class="..." />
</FormField>
```

**Props:** `id` (required) · `label` · `required` · `error` · `hint` · `fullWidth`

**Slot:** default (the control itself)

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

**Props:** `name` · `id` · `label` · `aria-label` · `checked` · `disabled` · `required` · `error`

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

Keyboard-navigable tab panel. Each entry in `tabs` renders a named slot matching its `id` — tag your content with `slot="<id>"`, not a `data-*` attribute.

```astro
<Tabs
  tabs={[
    { id: "overview", label: "Overview" },
    { id: "specs", label: "Specs" },
  ]}
>
  <p slot="overview">Overview content</p>
  <p slot="specs">Specs content</p>
</Tabs>
```

**Props:** `tabs` (array of `{ id, label }`) · `defaultTab`

> ⚠️ There's no compile-time check tying `tabs` to your slots — a typo'd or renamed `id` just renders an empty panel with no error. See [CONTRIBUTING.md](./CONTRIBUTING.md) for more on this.

---

### Toast

Programmatic toast notifications. Add `<Toast />` once to your layout, then call `window.toast(...)` from any script.

```astro
<!-- In your layout -->
<Toast />
```

```ts
// Trigger from any script
window.toast("Saved!", { variant: "success", duration: 4000 })
```

**`window.toast(message, options?)`:** `message` (string) · `options.variant` (info | success | warning | error, default info) · `options.duration` (ms, default 4000)

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

### Accordion

Native `<details>`/`<summary>` — no JS. Multiple items can be open at once.

```astro
<Accordion title="What is Core Boilerplate?" open>
  A production-ready Astro + Tailwind starter.
</Accordion>
```

**Props:** `title` (required) · `open` · `class`

---

### Avatar

Shows an image when `src` is set; falls back to initials derived from `alt`, or the explicit `initials` prop.

```astro
<Avatar src="/user.jpg" alt="Jane Doe" size="md" />
<Avatar initials="JD" size="md" shape="square" />
```

**Props:** `src` · `alt` · `initials` · `size` (xs | sm | md | lg | xl) · `shape` (circle | square)

---

### Combobox

Text input with native `<datalist>` filtering — zero JS. Wraps `Input`, adding only the `list`/`datalist` wiring.

```astro
<Combobox
  name="framework"
  label="Framework"
  options={[
    { value: "astro", label: "Astro" },
    { value: "next", label: "Next.js" },
  ]}
/>
```

**Props:** `name` (required) · `options` (required, array of `{ value, label }`) · `id` · `label` · `aria-label` · `placeholder` · `value` · `error` · `hint` · `size` (sm | md | lg) · `disabled` · `required` · `fullWidth`

---

### Divider

Horizontal or vertical rule, with an optional centered label.

```astro
<Divider />
<Divider label="OR" />
<Divider orientation="vertical" />
```

**Props:** `label` · `orientation` (horizontal | vertical)

---

### Drawer

Edge-anchored sliding panel. Open it with `data-drawer-open="<id>"` on any trigger element — same pattern as `Modal`.

```astro
<button data-drawer-open="settings">Open settings</button>

<Drawer id="settings" title="Settings" side="right">
  <p>Drawer content.</p>
</Drawer>
```

**Props:** `id` (required) · `title` · `side` (left | right)

**Slots:** `title` · default (body) · `footer`

---

### Dropdown

JS-powered menu panel. Closes on item click, Escape, or clicking outside.

```astro
<Dropdown>
  <Button slot="trigger" variant="secondary">Actions</Button>
  <a href="/edit">Edit</a>
  <a href="/duplicate">Duplicate</a>
</Dropdown>
```

**Props:** `align` (left | right)

**Slots:** `trigger` · default (menu items)

---

### Pagination

Page-number links with prev/next arrows. Page 1 links directly to `baseUrl` (no `/1` suffix).

```astro
<Pagination currentPage={2} totalPages={10} baseUrl="/blog" />
<!-- → /blog, /blog/2, /blog/3 … -->
```

**Props:** `currentPage` (required) · `totalPages` (required) · `baseUrl` (required)

---

### Progress

Progress bar with an optional label and percentage readout.

```astro
<Progress value={65} label="Uploading" showPercent />
```

**Props:** `value` (required, 0–100) · `label` · `showPercent` · `size` (sm | md | lg) · `variant` (primary | success | warning | error)

---

### Skeleton

Loading placeholder block.

```astro
<Skeleton height="1rem" width="60%" />
```

**Props:** `height` · `width` · `rounded` (none | sm | md | lg | xl | 2xl | full)

---

### Spinner

Loading spinner — uses `currentColor`.

```astro
<Spinner size="md" label="Loading" />
```

**Props:** `size` (sm | md | lg) · `label`

---

### Stepper

Multi-step progress indicator.

```astro
<Stepper
  steps={[{ label: "Account" }, { label: "Profile" }, { label: "Review" }]}
  currentStep={2}
/>
```

**Props:** `steps` (required, array of `{ label, description? }`) · `currentStep` (required) · `orientation` (horizontal | vertical)

---

### Table

Styled wrapper for standard `<table>` markup — write normal `<thead>`/`<tbody>`/`<tr>`/`<th>`/`<td>` inside.

```astro
<Table striped>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jane</td>
      <td>Admin</td>
    </tr>
  </tbody>
</Table>
```

**Props:** `striped`

---

### Toggle

Switch-style checkbox alternative.

```astro
<Toggle name="notifications" label="Email notifications" checked />
```

**Props:** `name` (required) · `id` · `label` · `checked` · `disabled` · `size` (sm | md | lg)

---

### Tooltip

CSS-only tooltip — shows on hover and keyboard focus, no JS.

```astro
<Tooltip tip="Copy to clipboard" placement="top">
  <IconButton label="Copy" variant="ghost">
    <svg>...</svg>
  </IconButton>
</Tooltip>
```

**Props:** `tip` (required) · `placement` (top | bottom | left | right)

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

## Icons

All icons throughout the boilerplate come from [line-md](https://icon-sets.iconify.design/line-md/) via [astro-icon](https://github.com/natemoo-re/astro-icon) — inlined as SVG at build time, zero runtime JS, and free to use anywhere:

```astro
---
import { Icon } from "astro-icon/components"
---

<Icon name="line-md:heart" width="20" height="20" />
```

Browse the full set at [icon-sets.iconify.design/line-md](https://icon-sets.iconify.design/line-md/) — any icon name from there works with `name="line-md:<icon-name>"`. Many icons are self-animating (stroke-draw on mount); toggle-style icons like `menu-to-close-transition` come in matched reverse pairs (`close-to-menu-transition`) for building two-state controls — see `Header.astro` and `ThemeToggle.astro` for real examples.

> ⚠️ Icons inserted at runtime via plain DOM APIs (e.g. inside a `<script>` block, like `Toast.astro`'s dismiss icons) can't use the `<Icon>` component — it only resolves at build time. Embed the SVG markup as a string literal instead.

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

`ThemeToggle` is **not** wired into `Header` automatically — add it yourself via the `nav-end` slot:

```astro
<Header>
  <ThemeToggle slot="nav-end" />
</Header>
```

To override any color for dark mode, add it to the `dark` key in `COLORS`:

```ts
dark: {
  bgBase: "#0f172a",
  brandPrimary: "#6366f1",
}
```

Any key omitted from `dark` inherits its light-mode value.

### Single-theme templates (no dark mode)

If your template only ships one theme, you can drop dark mode entirely instead of maintaining a redundant `dark` block that duplicates your light colors:

1. **Omit the `dark` key from `COLORS`** — `generateColorTokens()` in `astro.config.mjs` skips the `.dark {}` CSS block automatically when it's absent.
2. **Set `SITE.singleTheme = true`** — this skips the FOUC-prevention script and the dark `theme-color` meta tag in `BaseLayout`, both of which would otherwise run unconditionally with nothing to switch to.
3. **Don't include `<ThemeToggle>`** anywhere — there's no dark palette for it to switch to.

```ts
// src/config.ts
export const SITE = {
  // ...
  singleTheme: true,
}

export const COLORS = {
  // light-mode tokens only — no `dark` key
}
```

---

## OG image

The default Open Graph image is at `public/og-default.jpg`. It is shown when sharing links on social media (Twitter/X, Slack, LinkedIn, etc.) and is referenced from `SITE.ogImage` in `src/config.ts`.

Replace it with your own image (JPG or PNG, 1200×630px recommended) and update the path in `config.ts`. SVG is not supported by most social platforms.

---

## CI

Every push and pull request targeting `main` runs the CI pipeline automatically:

1. **Lint** — ESLint
2. **Type check** — `pnpm exec astro check`
3. **Unit tests** — `pnpm test` (Vitest, covers framework-agnostic logic in `src/utils/`)
4. **Build** — `pnpm build` (includes config schema validation and WCAG AA contrast check — fails on violation)
5. **Lighthouse CI** — performance ≥ 0.85, accessibility ≥ 0.96, best-practices = 1.0, SEO = 1.0
6. **End-to-end tests** — `pnpm test:e2e` (Playwright, cross-browser: Chromium, Firefox, WebKit — covers every JS-powered component: Modal, Drawer, Dropdown, Tabs, Toast, Combobox, ThemeToggle)

The `main` branch is protected — merging requires a passing CI run and an open pull request.

### Testing locally

```bash
pnpm test        # unit tests (Vitest)
pnpm test:e2e    # end-to-end tests (Playwright) — builds and previews the site automatically
```

The first `pnpm test:e2e` run requires the Playwright browsers to be installed once:

```bash
pnpm exec playwright install --with-deps chromium firefox webkit
```

---

## Release automation

Every push to `main` is versioned automatically via [release-please](https://github.com/googleapis/release-please): commit messages (`feat:`, `fix:`) drive semantic version bumps and `CHANGELOG.md` generation, and the standing release PR merges itself once its own CI run passes.

**This does not work out of the box in a new repository** — three one-time steps are required right after you create your repo from this template:

1. **Create a `RELEASE_PLEASE_TOKEN` repo secret** — a GitHub Personal Access Token (classic or fine-grained) with **Contents: write** and **Pull requests: write** permissions, added under Settings → Secrets and variables → Actions. Without it, PRs opened and merged with the default `GITHUB_TOKEN` don't trigger downstream workflows — neither the required CI check the release PR waits on, nor the follow-up run that creates the GitHub Release and tag once the release commit lands.
2. **Protect the `main` branch** with **"Type check & build"** set as a required status check, and enable **"Allow auto-merge"** in the repo's general settings — otherwise the release PR would merge immediately without waiting for CI.
3. **Reset `.release-please-manifest.json`** to your project's starting version (e.g. `{ ".": "0.1.0" }`) — it ships pre-set to this template's own version history.

Once these are in place, every `feat:`/`fix:` commit to `main` is versioned and changelogged automatically, with no further manual steps.

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
