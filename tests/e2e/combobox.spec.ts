import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#combobox")
})

test("filters the native datalist as the user types", async ({ page }) => {
  const input = page.getByLabel("Framework", { exact: true })
  await input.fill("Ast")

  const listId = await input.getAttribute("list")
  expect(listId).toBeTruthy()

  const options = page.locator(`#${listId} option`)
  const values = await options.evaluateAll((els) =>
    els.map((el) => (el as HTMLOptionElement).value)
  )
  expect(values).toContain("astro")
})

test("accepts a typed value not present in the options", async ({ page }) => {
  const input = page.getByLabel("Framework", { exact: true })
  await input.fill("Something custom")
  await expect(input).toHaveValue("Something custom")
})
