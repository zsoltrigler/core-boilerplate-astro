import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test.beforeEach(async ({ page }) => {
  await gotoSection(page, "stat-tile")
})

test("newTab tile opens in a new tab and says so to screen readers and sighted users", async ({
  page,
}) => {
  const tile = page.locator("#stat-tile a[href='https://example.com']")

  await expect(tile).toHaveAttribute("target", "_blank")
  await expect(tile).toHaveAttribute("rel", "noopener noreferrer")
  await expect(tile.locator(".sr-only")).toHaveText("(opens in a new tab)")
  await expect(tile.locator("svg[aria-hidden='true']").last()).toBeVisible()
  // * The hint is part of the link's accessible name, after the visible content.
  await expect(tile).toHaveAccessibleName(/Live site.*example\.com.*\(opens in a new tab\)/)
})

test("a tile without newTab has no target, rel or new-tab hint", async ({ page }) => {
  const tile = page.locator("#stat-tile a[href='#stat-tile']")

  await expect(tile).not.toHaveAttribute("target", /.*/)
  await expect(tile).not.toHaveAttribute("rel", /.*/)
  await expect(tile.locator(".sr-only")).toHaveCount(0)
})
