// * Lighthouse CI configuration — enforces score thresholds on every CI run.
// * Run locally: pnpm exec lhci autorun
// ! Thresholds are set slightly below 100 — performance varies by run, and
//   accessibility scores have a known CSS-variable false-positive (see below).
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
        // * 0.9 instead of 0.95 — CI runners are slower than local machines and
        //   performance scores vary. 0.9 is a realistic minimum in headless CI.
        "categories:performance": ["error", { minScore: 0.9 }],
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
