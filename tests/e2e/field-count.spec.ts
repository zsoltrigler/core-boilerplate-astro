import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test("Input forwards maxlength/minlength and keeps the counter in sync", async ({ page }) => {
  await gotoSection(page, "input")
  const input = page.locator("#username-count")
  const counter = page.locator("#username-count-count")
  const visible = counter.locator("[data-field-count-visible]")
  const live = counter.locator("[data-field-count-live]")

  await expect(input).toHaveAttribute("maxlength", "20")
  await expect(input).toHaveAttribute("minlength", "3")
  await expect(visible).toHaveText("0 / 20")
  await expect(visible).toHaveAttribute("aria-hidden", "true")
  await expect(live).toHaveAttribute("aria-live", "polite")

  // * Below 90% — counts, but announces nothing.
  await input.fill("abc")
  await expect(visible).toHaveText("3 / 20")
  await expect(live).toHaveText("")

  // * 90% of max — announced once.
  await input.fill("a".repeat(18))
  await expect(live).toHaveText("18 / 20")
  await expect(counter).not.toHaveAttribute("data-at-limit", /.*/)

  // * The browser stops at maxlength, so typing past it still lands on 20.
  await input.pressSequentially("xyz")
  await expect(visible).toHaveText("20 / 20")
  await expect(live).toHaveText("20 / 20")
  await expect(counter).toHaveAttribute("data-at-limit", "")

  // * Clearing back below 90% silences the live region and drops the limit state.
  await input.fill("")
  await expect(visible).toHaveText("0 / 20")
  await expect(live).toHaveText("")
  await expect(counter).not.toHaveAttribute("data-at-limit", /.*/)
})

test("Textarea counter sits next to its hint", async ({ page }) => {
  await gotoSection(page, "textarea")
  const textarea = page.locator("#textarea-count")

  await expect(textarea).toHaveAttribute("maxlength", "200")
  await expect(textarea).toHaveAttribute("aria-describedby", "textarea-count-hint")
  await expect(page.locator("#textarea-count-hint")).toHaveText("Be as specific as you can.")

  await textarea.fill("Hello\nworld")
  await expect(page.locator("#textarea-count-count [data-field-count-visible]")).toHaveText(
    "11 / 200"
  )
})
