import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test.beforeEach(async ({ page }) => {
  await gotoSection(page, "dropdown")
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

test("closeOnSelect={false} keeps the panel open while toggling Checkboxes", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Condition" })
  await trigger.click()
  await expect(trigger).toHaveAttribute("aria-haspopup", "dialog")

  const panel = page.getByRole("dialog", { name: "Filter by condition" })
  await expect(panel).toBeVisible()

  await panel.getByLabel("New").check()
  await panel.getByLabel("Used").check()
  await expect(panel).toBeVisible()
  await expect(trigger).toHaveAttribute("aria-expanded", "true")

  await page.keyboard.press("Escape")
  await expect(panel).toBeHidden()
})

test("opening another Dropdown closes the one that was open", async ({ page }) => {
  const actions = page.getByRole("button", { name: "Actions" })
  const condition = page.getByRole("button", { name: "Condition" })

  await actions.click()
  await expect(actions).toHaveAttribute("aria-expanded", "true")

  await condition.click()
  await expect(condition).toHaveAttribute("aria-expanded", "true")
  await expect(actions).toHaveAttribute("aria-expanded", "false")
})
