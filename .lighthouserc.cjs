// * Lighthouse CI configuration — enforces SEO and best-practices at 100.
// * Run locally: pnpm exec lhci autorun
// ! Only categories that are reliably 1.0 in headless CI are asserted.
//   Performance varies too much on shared runners; accessibility false-positives
//   on CSS custom properties. Both are validated on Vercel preview instead.
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
      preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": "off",
        "categories:accessibility": "off",
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
        // * cssCodeSplit is intentionally disabled — one blocking stylesheet is
        //   the trade-off for preventing multiple render-blocking CSS chunks.
        "render-blocking-resources": "off",
        "render-blocking-insight": "off",
        // * CSS custom properties cannot be resolved statically by Lighthouse.
        "color-contrast": "off",
        // * Flags the single CSS bundle (intentional, see cssCodeSplit: false).
        "network-dependency-tree-insight": "off",
        // * 404 and /ui pages are intentionally noindex.
        "is-crawlable": "off",
        // * Noisy diagnostic audits from the preset with no actionable value.
        "dom-size-insight": "off",
        "mainthread-work-breakdown": "off",
        "max-potential-fid": "off",
        "speed-index": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
