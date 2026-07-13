# ADR-0001: This repo stays Astro-based, not a monorepo

## Status

Accepted — 2026-07-13

## Context

A shared monorepo (pnpm workspaces + Turborepo) was considered, where this repo's component library would be reused by a separate developer-facing SaaS boilerplate product (auth, Stripe, DB-backed).

That other product needs a dynamic, server-rendered application shell — session handling, API routes, webhooks, authenticated dashboards with heavy client-side state. Astro is fundamentally a static-site generator; it supports SSR via adapters, but lacks a mature ecosystem of Astro-native auth libraries, and its page-based rendering model isn't a natural fit for stateful, app-like dashboards. Building that product on this stack would mean inventing unproven patterns from scratch, for no real benefit.

This repo's actual use case — small-business marketing sites — is exactly what Astro is good at: static-first rendering, minimal JS, strong SEO/Lighthouse scores. A dynamic app framework would be unnecessary overhead here.

## Decision

This repo stays Astro-based and flat (not a monorepo) — the current structure is already fit for purpose and does not need Turborepo/workspaces.

The auth/Stripe/DB-backed product is a separate initiative, built on a different stack, living in its own repo with its own ADRs. It does not share a code-level component library with this repo; at most, design concepts (color/spacing/typography scale) may be reimplemented independently in its own config.

## Consequences

- No monorepo/Turborepo migration is needed here.
- This repo will not grow auth, Stripe, or DB-backed dashboard features — that scope belongs to the other product.
