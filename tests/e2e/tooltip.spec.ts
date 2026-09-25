import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test.beforeEach(async ({ page }) => {
  await gotoSection(page, "tooltip")
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

test.describe("viewport collision (360px)", () => {
  test.use({ viewport: { width: 360, height: 740 } })

  const bubbleOf = async (page: import("@playwright/test").Page, name: string) => {
    const trigger = page.getByRole("button", { name, exact: true })
    await trigger.scrollIntoViewIfNeeded()
    return { trigger, bubble: page.locator(`#${await trigger.getAttribute("aria-describedby")}`) }
  }

  const expectInsideViewport = async (
    page: import("@playwright/test").Page,
    bubble: import("@playwright/test").Locator
  ) => {
    const box = (await bubble.boundingBox())!
    const vp = page.viewportSize()!
    expect(box.x).toBeGreaterThanOrEqual(0)
    expect(box.y).toBeGreaterThanOrEqual(0)
    expect(box.x + box.width).toBeLessThanOrEqual(vp.width)
    expect(box.y + box.height).toBeLessThanOrEqual(vp.height)
  }

  for (const name of ["Left edge", "Right edge", "Clipped parent"]) {
    test(`"${name}" bubble stays fully inside the viewport`, async ({ page }) => {
      const { trigger, bubble } = await bubbleOf(page, name)
      await trigger.focus()
      await expect(bubble).toHaveCSS("opacity", "1")
      await expectInsideViewport(page, bubble)
    })
  }

  test("bubble is not clipped by an overflow-hidden ancestor", async ({ page }) => {
    const { trigger, bubble } = await bubbleOf(page, "Clipped parent")
    await trigger.focus()
    await expect(bubble).toHaveCSS("opacity", "1")
    const clipped = await bubble.evaluate((el) => {
      const rect = el.getBoundingClientRect()
      const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)
      return hit !== el && !el.contains(hit)
    })
    expect(clipped).toBe(false)
  })

  test("hidden bubbles cause no horizontal scroll", async ({ page }) => {
    // * /ui has unrelated wide showcase content (Table, Pagination) at 360px, so compare against the
    // * same page with every bubble removed: hidden tooltips must add nothing to the scroll width.
    const { withBubbles, withoutBubbles } = await page.evaluate(() => {
      const width = () => document.documentElement.scrollWidth
      const withBubbles = width()
      document.querySelectorAll("[data-tooltip-bubble]").forEach((bubble) => bubble.remove())
      return { withBubbles, withoutBubbles: width() }
    })
    expect(withBubbles).toBe(withoutBubbles)
  })

  test("only one bubble is visible at a time", async ({ page }) => {
    const first = await bubbleOf(page, "Left edge")
    const second = await bubbleOf(page, "Right edge")
    await first.trigger.focus()
    await second.trigger.focus()
    await expect(second.bubble).toHaveCSS("opacity", "1")
    await expect(first.bubble).toBeHidden()
  })
})
