# ADR-0001: This repo stays Astro-based, not a monorepo

## Status

Accepted — 2026-07-13

## Context

A migration to a shared monorepo (pnpm workspaces + Turborepo) was considered, on the assumption that this repo's component library could be reused across auth/Stripe/DB-backed, dynamic applications.

Such applications need a dynamic, server-rendered application shell — session handling, API routes, webhooks, authenticated dashboards with heavy client-side state. Astro is fundamentally a static-site generator; it supports SSR via adapters, but lacks a mature ecosystem of Astro-native auth libraries, and its page-based rendering model isn't a natural fit for stateful, app-like dashboards.

This repo's actual use case — small-business marketing sites — is exactly what Astro is good at: static-first rendering, minimal JS, strong SEO/Lighthouse scores. A dynamic app framework would be unnecessary overhead here, and building dynamic-app patterns into this Astro codebase would mean inventing unproven patterns from scratch, for no real benefit.

## Decision

This repo stays Astro-based and flat (not a monorepo) — the current structure is already fit for purpose and does not need Turborepo/workspaces. It will not take on auth, Stripe, or DB-backed dashboard features.

## Consequences

- No monorepo/Turborepo migration is needed here.
- Feature requests requiring a dynamic, server-rendered application shell (auth, payments, authenticated dashboards) are out of scope for this repo.
