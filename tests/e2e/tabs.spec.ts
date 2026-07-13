import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#tabs")
})

test("clicking a tab activates it and shows its panel", async ({ page }) => {
  const overviewTab = page.getByRole("tab", { name: "Overview" })
  const usageTab = page.getByRole("tab", { name: "Usage" })

  await expect(overviewTab).toHaveAttribute("aria-selected", "true")
  await expect(usageTab).toHaveAttribute("aria-selected", "false")

  await usageTab.click()
  await expect(usageTab).toHaveAttribute("aria-selected", "true")
  await expect(overviewTab).toHaveAttribute("aria-selected", "false")

  const usagePanel = page.locator("#panel-usage")
  await expect(usagePanel).toBeVisible()
})

test("ArrowRight/ArrowLeft move focus and activate the neighboring tab", async ({ page }) => {
  const overviewTab = page.getByRole("tab", { name: "Overview" })
  const usageTab = page.getByRole("tab", { name: "Usage" })
  const propsTab = page.getByRole("tab", { name: "Props" })

  await overviewTab.focus()
  await page.keyboard.press("ArrowRight")
  await expect(usageTab).toBeFocused()
  await expect(usageTab).toHaveAttribute("aria-selected", "true")

  await page.keyboard.press("ArrowRight")
  await expect(propsTab).toBeFocused()

  await page.keyboard.press("ArrowLeft")
  await expect(usageTab).toBeFocused()
})

test("Home/End jump to the first/last tab", async ({ page }) => {
  const overviewTab = page.getByRole("tab", { name: "Overview" })
  const propsTab = page.getByRole("tab", { name: "Props" })

  await overviewTab.focus()
  await page.keyboard.press("End")
  await expect(propsTab).toBeFocused()

  await page.keyboard.press("Home")
  await expect(overviewTab).toBeFocused()
})
