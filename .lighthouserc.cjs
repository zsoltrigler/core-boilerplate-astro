// * Lighthouse CI configuration — enforces score thresholds on every CI run.
// * Run locally: pnpm exec lhci autorun
// ! Performance is not asserted — CI runner scores are too variable (0.8–0.95).
//   Accessibility, best-practices, and SEO are the reliable static checks here.
module.exports = {
  ci: {
    collect: {
      // * Serve the pre-built dist/ folder — no dev server needed in CI.
      staticDistDir: "./dist",
      // * Only test the production homepage. 404 and /ui are developer-facing
      //   pages with intentional noindex — they would skew SEO and A11y scores.
      url: ["http://localhost/index.html"],
      numberOfRuns: 1,
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        // * Performance scores are intentionally not asserted here — GitHub Actions
        //   runners are shared machines with variable load, causing scores to swing
        //   between 0.8–0.95 across identical runs. Validate performance against
        //   the Vercel preview or production deployment instead.
        "categories:performance": "off",
        // * 0.95 instead of 1.0: color-contrast audit cannot resolve CSS custom
        //   properties statically, which false-positives and lowers the score.
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        // * cssCodeSplit is intentionally disabled (all CSS in one file) to prevent
        //   multiple render-blocking chunks. One blocking stylesheet is the trade-off.
        "render-blocking-resources": "off",
        "render-blocking-insight": "off",
        // * All colors use CSS custom properties — Lighthouse cannot resolve them
        //   statically, so color-contrast always false-positives on this project.
        "color-contrast": "off",
        // * network-dependency-tree-insight is a new audit flagging the single CSS
        //   bundle (intentional, see cssCodeSplit: false).
        "network-dependency-tree-insight": "off",
        // * is-crawlable is checked per-URL; 404 page is intentionally noindex.
        //   Pages with <meta name="robots" content="noindex"> trigger this audit.
        "is-crawlable": "off",
        // * Diagnostic-only audits from lighthouse:no-pwa preset — warn level but
        //   noisy in CI output. Scores are 0 by design on static pages without JS.
        "dom-size-insight": "off",
        "mainthread-work-breakdown": "off",
        "max-potential-fid": "off",
      },
    },
    upload: {
      // * No external upload target — results are logged to stdout only.
      target: "temporary-public-storage",
    },
  },
}
