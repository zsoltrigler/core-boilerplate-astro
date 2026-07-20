// * Lighthouse CI configuration — enforces SEO and best-practices at 100.
// * Run locally: pnpm exec lhci autorun
// ! Only categories that are reliably 1.0 in headless CI are asserted.
//   Performance varies too much on shared runners; accessibility false-positives
//   on CSS custom properties. Both are validated on Vercel preview instead.
// ! No `preset` key here on purpose — any lhci preset (e.g. "lighthouse:no-pwa")
//   brings its own per-audit assertions (heading-order, image-delivery-insight,
//   uses-responsive-images, etc.), all independent of the "categories:*" keys
//   below. Setting "categories:performance"/"categories:accessibility" to
//   "off" only silences the rollup score, not those inherited per-audit
//   checks — so a preset would re-introduce the exact flakiness this file
//   exists to avoid. Without a preset, only the assertions listed below run.
module.exports = {
  ci: {
    collect: {
      // * Use the Astro dev server rather than serving a built output directory
      //   or `astro preview`. Both of those depend on the configured adapter/
      //   output mode (`static` vs `server` with Vercel/Cloudflare/Node/etc.) —
      //   a template that adds a server adapter would have no dist/index.html,
      //   or `astro preview` would behave differently per adapter. `astro dev`
      //   is available identically regardless of adapter, since this check only
      //   audits SEO/best-practices, not performance.
      // ! Call the astro binary directly (not `pnpm dev --`) — the extra pnpm
      //   script layer delays/reorders stdout enough that lhci's readiness-
      //   pattern match can time out before the server is actually reachable.
      // ! Astro 7's dev server runs as a detached background daemon: the
      //   invoking process only ever prints "Dev server running at ...", never
      //   the Vite-style "ready in Xms" banner (that goes to the daemon's own
      //   log, not this stdout) — match on the text that's actually emitted.
      // ! Disable the dev toolbar for this run only: it injects a "Learn more"
      //   link with non-descriptive text that fails the `link-text` SEO audit,
      //   and only exists in dev mode (never in a production build). The
      //   preference is written to the gitignored .astro/ dir, so it's scoped
      //   to this checkout and doesn't touch the shared astro.config.mjs.
      startServerCommand:
        "pnpm exec astro preferences disable devToolbar && pnpm exec astro dev --port 4321",
      startServerReadyPattern: "Dev server running at",
      startServerReadyTimeout: 15000,
      // * Only test the production homepage. 404 and /ui are developer-facing
      //   pages with intentional noindex — they skew SEO scores.
      url: ["http://localhost:4321/"],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
