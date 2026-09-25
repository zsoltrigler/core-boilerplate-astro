import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test.beforeEach(async ({ page }) => {
  await gotoSection(page, "input")
})

test("live validation shows an accessible error on blur and clears it once fixed", async ({
  page,
}) => {
  const input = page.locator("#live-email")
  const error = page.locator("#live-email-error")

  // * Always in the DOM (so a role="alert" region exists before the text arrives), but hidden and empty.
  await expect(error).toBeAttached()
  await expect(error).toBeHidden()
  await expect(error).toHaveText("")
  await expect(input).not.toHaveAttribute("aria-invalid", /.*/)
  await expect(input).toHaveAttribute("aria-describedby", "live-email-hint")

  await input.fill("not-an-email")
  await input.blur()

  await expect(error).toBeVisible()
  await expect(error).toHaveText("Enter a valid email address, e.g. name@example.com.")
  await expect(error).toHaveAttribute("role", "alert")
  await expect(input).toHaveAttribute("aria-invalid", "true")
  await expect(input).toHaveAttribute("aria-describedby", "live-email-error live-email-hint")

  // * Re-validates on input while an error is showing, so fixing the value clears it immediately.
  await input.fill("name@example.com")

  await expect(error).toBeHidden()
  await expect(error).toHaveText("")
  await expect(input).not.toHaveAttribute("aria-invalid", /.*/)
  // * No dangling reference to the error element — only the hint id remains.
  await expect(input).toHaveAttribute("aria-describedby", "live-email-hint")
})

test("an empty field is reported on blur", async ({ page }) => {
  const input = page.locator("#live-email")
  await input.focus()
  await input.blur()
  await expect(page.locator("#live-email-error")).toHaveText("Enter your email address.")
})

test("Input, Select, Textarea and Combobox all render a hidden error element for client-side errors", async ({
  page,
}) => {
  for (const selector of [
    "#input input:not([list])",
    "#select select",
    "#textarea textarea",
    "#combobox input[list]",
  ]) {
    const id = await page.locator(selector).first().getAttribute("id")
    const error = page.locator(`[id="${id}-error"]`).first()
    await expect(error, selector).toBeAttached()
    await expect(error, selector).toHaveAttribute("role", "alert")
  }
})
