import { expect, test } from "@playwright/test"

// * Loads each page from the production build (`pnpm preview` — the CSP <meta> is
//   absent under `astro dev`) and fails on any Content-Security-Policy violation.
//   Two signals, because engines report differently: the standard
//   `securitypolicyviolation` event, and console messages mentioning the policy.
const PAGES = ["/", "/ui/", "/404"]

for (const path of PAGES) {
  test(`${path} loads without Content-Security-Policy violations`, async ({ page }) => {
    const consoleHits: string[] = []
    page.on("console", (msg) => {
      if (/content[- ]security[- ]policy/i.test(msg.text())) consoleHits.push(msg.text())
    })
    await page.addInitScript(() => {
      const w = window as unknown as { __cspViolations: string[] }
      w.__cspViolations = []
      document.addEventListener("securitypolicyviolation", (e) => {
        w.__cspViolations.push(`${e.violatedDirective} blocked ${e.blockedURI || "inline"}`)
      })
    })

    await page.goto(path)
    await page.waitForLoadState("networkidle")

    await expect(page.locator('meta[http-equiv="content-security-policy"]')).toHaveCount(1, {
      timeout: 5_000,
    })
    const violations = await page.evaluate(
      () => (window as unknown as { __cspViolations: string[] }).__cspViolations
    )
    expect(violations).toEqual([])
    expect(consoleHits).toEqual([])
  })
}
