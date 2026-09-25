import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test.beforeEach(async ({ page }) => {
  await gotoSection(page, "card")
})

test("Card forwards id and data-* attributes to its root <div>", async ({ page }) => {
  const card = page.locator("#card-forwarded")
  await expect(card).toHaveAttribute("data-example", "forwarded")
  expect(await card.evaluate((el) => el.tagName)).toBe("DIV")
})

test("Card forwards id to its root <details> when collapsible", async ({ page }) => {
  const card = page.locator("#card-collapsible")
  expect(await card.evaluate((el) => el.tagName)).toBe("DETAILS")
})

test("an anchor link scrolls to the id'd Card", async ({ page }) => {
  await page.getByRole("link", { name: /Link to this Card/ }).click()
  await expect(page).toHaveURL(/#card-forwarded$/)
  await expect(page.locator("#card-forwarded")).toBeInViewport()
})
