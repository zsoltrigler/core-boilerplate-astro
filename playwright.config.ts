import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // * Private-repo CI runners have 2 vCPUs; Playwright's CI default is 1 worker.
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? "line" : "html",
  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },
  // * Serves an existing dist/ — it does not build. `pnpm test:e2e` builds first;
  //   CI downloads the dist/ built once by the build-dist job. Keeping the build
  //   out of this window means the timeout only covers server startup.
  webServer: {
    command: "pnpm preview",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  // * Tests tagged `@layout` check markup / CSS / breakpoint behaviour that does not
  //   depend on the browser engine, so they run on Chromium only. Engine-dependent
  //   tests (fonts, scroll-driven support, forms, JS components) stay untagged and
  //   run everywhere. See CONTRIBUTING.md → "Testing".
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      grepInvert: /@layout/,
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      grepInvert: /@layout/,
    },
  ],
})
