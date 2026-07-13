import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#modal")
})

test("opens on trigger click and closes on the × button", async ({ page }) => {
  const modal = page.locator("#modal-default")
  await expect(modal).not.toBeVisible()

  await page.click('[data-modal-open="modal-default"]')
  await expect(modal).toBeVisible()

  await modal.getByRole("button", { name: "Close modal" }).click()
  await expect(modal).not.toBeVisible()
})

test("closes on backdrop click", async ({ page }) => {
  const modal = page.locator("#modal-default")
  await page.click('[data-modal-open="modal-default"]')
  await expect(modal).toBeVisible()

  // Click at the edge of the viewport, outside the centered dialog panel.
  await page.mouse.click(2, 2)
  await expect(modal).not.toBeVisible()
})

test("closes on Escape", async ({ page }) => {
  const modal = page.locator("#modal-default")
  await page.click('[data-modal-open="modal-default"]')
  await expect(modal).toBeVisible()

  await page.keyboard.press("Escape")
  await expect(modal).not.toBeVisible()
})
