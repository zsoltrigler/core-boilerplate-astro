import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test.beforeEach(async ({ page }) => {
  await gotoSection(page, "button")
})

test("Button newTab opens in a new tab and flags it to screen readers and sighted users", async ({
  page,
}) => {
  const button = page.locator("#button a", { hasText: /^New tab/ })

  await expect(button).toHaveAttribute("target", "_blank")
  await expect(button).toHaveAttribute("rel", "noopener noreferrer")
  await expect(button.locator(".sr-only")).toHaveText("(opens in a new tab)")
  await expect(button.locator("svg[aria-hidden='true']")).toHaveCount(1)
  await expect(button).toHaveAccessibleName("New tab (opens in a new tab)")
})

test("Button newTab keeps a caller-supplied icon-right instead of adding its own", async ({
  page,
}) => {
  const button = page.locator("#button a", { hasText: /^Custom icon/ })

  await expect(button).toHaveAttribute("target", "_blank")
  await expect(button.locator("svg")).toHaveCount(1)
  await expect(button.locator(".sr-only")).toHaveText("(opens in a new tab)")
})

test("deprecated Button external still only adds target and rel", async ({ page }) => {
  const button = page.locator("#button a", { hasText: /^External \(deprecated\)/ })

  await expect(button).toHaveAttribute("target", "_blank")
  await expect(button).toHaveAttribute("rel", "noopener noreferrer")
  await expect(button.locator(".sr-only")).toHaveCount(0)
  await expect(button.locator("svg")).toHaveCount(0)
})

test("IconButton newTab appends the hint to its aria-label", async ({ page }) => {
  await gotoSection(page, "icon-button")
  const button = page.locator("#icon-button a[href='/ui']")

  await expect(button).toHaveAttribute("target", "_blank")
  await expect(button).toHaveAttribute("rel", "noopener noreferrer")
  await expect(button).toHaveAttribute("aria-label", "Open docs (opens in a new tab)")
})
