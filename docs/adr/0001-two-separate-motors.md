# ADR-0001: Two separate Motors instead of one shared monorepo

## Status

Accepted — 2026-07-13

## Context

The original plan was a single shared "Motor" monorepo (pnpm workspaces + Turborepo) whose `packages/ui` would serve both a developer-facing SaaS boilerplate (auth, Stripe, DB) and a set of small-business marketing templates.

Every existing production-ready SaaS boilerplate on the market (e.g. ShipFast, Supastarter, Makerkit) is built on Next.js, not Astro. This isn't an accidental gap — it reflects a real technical mismatch:

- Auth + Stripe + DB-backed apps need a dynamic, server-rendered application shell (session handling, API routes, webhooks, authenticated dashboards with heavy client-side state).
- Next.js is purpose-built for this: Server Actions, API routes, React Server Components, and mature first-party integrations for Auth.js/NextAuth and Stripe.
- Astro is fundamentally a static-site generator. It supports SSR via adapters, but lacks a mature ecosystem of Astro-native auth libraries, and its page-based rendering model isn't a natural fit for stateful, app-like dashboards the way React is.
- Forcing a SaaS-style auth/Stripe app onto Astro would mean building unproven patterns from scratch, with no ecosystem to lean on — high engineering risk for no real benefit.

Astro remains the right choice for the other product line: small-business marketing sites (this repo's actual use case) benefit from Astro's static-first rendering, minimal JS, and strong SEO/Lighthouse scores — a dynamic app framework like Next.js would be unnecessary overhead there.

## Decision

Build two separate, independently-maintained "Motors" instead of one shared monorepo:

1. **This repo (`core-boilerplate`)** stays Astro-based and serves the small-business template product line. It remains a flat repo (not a monorepo) — the current structure is already fit for purpose and does not need Turborepo/workspaces.
2. **A separate, not-yet-started repo** will serve the developer-facing SaaS boilerplate product line (auth, Stripe, DB), built on Next.js.

The two Motors do not share a code-level component library. Design concepts (color/spacing/typography tokens) may be reimplemented independently in each stack's own config, but no attempt is made to share component code across Astro and Next.js.

## Consequences

- No monorepo/Turborepo migration is needed for this repo — the existing flat structure stands.
- The two product lines can be worked on and released independently, on their own timelines.
- Some conceptual design-token duplication is expected (same palette/spacing scale, reimplemented per stack) — this is accepted as a low cost relative to avoiding a shared, framework-straddling component library.
- The Next.js-based Motor is a separate initiative with its own ADRs, once work on it begins.
