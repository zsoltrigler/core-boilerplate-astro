import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#dropdown")
})

test("opens on trigger click and sets aria-expanded", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Actions" })
  const menu = page
    .locator("[data-dropdown]")
    .filter({ has: page.getByRole("button", { name: "Actions" }) })
    .locator("[data-dropdown-menu]")

  await expect(trigger).toHaveAttribute("aria-expanded", "false")
  await expect(menu).toBeHidden()

  await trigger.click()
  await expect(trigger).toHaveAttribute("aria-expanded", "true")
  await expect(menu).toBeVisible()
})

test("closes on Escape and returns focus to the trigger", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Actions" })
  await trigger.click()
  await expect(trigger).toHaveAttribute("aria-expanded", "true")

  await page.keyboard.press("Escape")
  await expect(trigger).toHaveAttribute("aria-expanded", "false")
  await expect(trigger).toBeFocused()
})

test("closes when clicking outside", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Actions" })
  await trigger.click()
  await expect(trigger).toHaveAttribute("aria-expanded", "true")

  await page.mouse.click(2, 2)
  await expect(trigger).toHaveAttribute("aria-expanded", "false")
})

test("closes when an item is clicked", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Actions" })
  await trigger.click()

  await page.getByRole("link", { name: "Edit" }).click()
  await expect(trigger).toHaveAttribute("aria-expanded", "false")
})
