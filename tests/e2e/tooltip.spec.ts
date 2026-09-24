import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#tooltip")
})

const cardTrigger = (page: import("@playwright/test").Page) =>
  page.getByRole("button", { name: "In stock" })

test("links the trigger to the bubble via aria-describedby", async ({ page }) => {
  const trigger = cardTrigger(page)
  const id = await trigger.getAttribute("aria-describedby")
  expect(id).toBeTruthy()
  await expect(page.locator(`#${id}`)).toHaveAttribute("role", "tooltip")
})

test("shows on focus and dismisses on Escape", async ({ page }) => {
  const trigger = cardTrigger(page)
  const bubble = page.locator(`#${await trigger.getAttribute("aria-describedby")}`)
  await trigger.focus()
  await expect(bubble).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(bubble).toHaveCSS("opacity", "0")
})

test("stays visible while the pointer is over the bubble", async ({ page }) => {
  const trigger = cardTrigger(page)
  const bubble = page.locator(`#${await trigger.getAttribute("aria-describedby")}`)
  await trigger.hover()
  await expect(bubble).toHaveCSS("opacity", "1")
  const box = (await bubble.boundingBox())!
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 5 })
  await expect(bubble).toHaveCSS("opacity", "1")
})

test("does not open when hovering the surrounding card", async ({ page }) => {
  const trigger = cardTrigger(page)
  const bubble = page.locator(`#${await trigger.getAttribute("aria-describedby")}`)
  await page.getByText("Clickable card").hover()
  await expect(bubble).toHaveCSS("opacity", "0")
})
