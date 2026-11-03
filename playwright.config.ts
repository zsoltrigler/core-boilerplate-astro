import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
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
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
})
