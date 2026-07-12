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
      // * Serve the pre-built dist/ folder — no dev server needed in CI.
      staticDistDir: "./dist",
      // * Only test the production homepage. 404 and /ui are developer-facing
      //   pages with intentional noindex — they skew SEO scores.
      url: ["http://localhost/index.html"],
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
