import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#drawer")
})

test("opens from the right and closes on the × button", async ({ page }) => {
  const drawer = page.locator("#drawer-right")
  await expect(drawer).not.toBeVisible()

  await page.click('[data-drawer-open="drawer-right"]')
  await expect(drawer).toBeVisible()

  await drawer.getByRole("button", { name: "Close drawer" }).click()
  await expect(drawer).not.toBeVisible()
})

test("opens from the left", async ({ page }) => {
  const drawer = page.locator("#drawer-left")
  await page.click('[data-drawer-open="drawer-left"]')
  await expect(drawer).toBeVisible()
})

test("closes on Escape", async ({ page }) => {
  const drawer = page.locator("#drawer-right")
  await page.click('[data-drawer-open="drawer-right"]')
  await expect(drawer).toBeVisible()

  await page.keyboard.press("Escape")
  await expect(drawer).not.toBeVisible()
})
