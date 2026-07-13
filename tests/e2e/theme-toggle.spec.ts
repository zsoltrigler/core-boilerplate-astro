import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui")
})

test("toggles the dark class on <html> and persists the choice", async ({ page }) => {
  const html = page.locator("html")
  const toggle = page.locator("[data-theme-toggle]").first()

  const initiallyDark = await html.evaluate((el) => el.classList.contains("dark"))

  await toggle.click()
  await expect(html).toHaveClass(initiallyDark ? /^(?!.*dark).*$/ : /dark/)

  const stored = await page.evaluate(() => localStorage.getItem("theme"))
  expect(stored).toBe(initiallyDark ? "light" : "dark")

  // * Reloading should keep the toggled theme (localStorage persistence).
  await page.reload()
  const afterReload = await html.evaluate((el) => el.classList.contains("dark"))
  expect(afterReload).toBe(!initiallyDark)
})
