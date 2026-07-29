import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#avatar")
})

test("falls back to initials when the image fails to load", async ({ page }) => {
  const img = page.locator('img[data-avatar-img][alt="Broken Image"]')
  const fallback = page.locator("[data-avatar-fallback]", { hasText: "BI" })

  // * The error can fire before or after the (deferred) fallback script attaches its
  //   listener — see Avatar.astro's img.complete check — so only the end state is asserted.
  await expect(img).toBeAttached()
  await expect(img).toBeHidden({ timeout: 10_000 })
  await expect(fallback).toBeVisible()
})

test("renders initials directly when no src is given", async ({ page }) => {
  await expect(page.getByText("AB", { exact: true })).toBeVisible()
})
