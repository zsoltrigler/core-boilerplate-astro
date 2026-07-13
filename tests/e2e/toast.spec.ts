import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/ui#toast")
})

test("window.toast renders a toast with the message and auto-dismisses", async ({ page }) => {
  await page.evaluate(() => {
    ;(window as unknown as { toast: (msg: string, opts?: object) => void }).toast("Saved!", {
      variant: "success",
      duration: 300,
    })
  })

  const toast = page.locator("#toast-container").getByText("Saved!")
  await expect(toast).toBeVisible()
  await expect(toast).toBeHidden({ timeout: 2000 })
})

test("supports multiple simultaneous toasts", async ({ page }) => {
  await page.evaluate(() => {
    const w = window as unknown as { toast: (msg: string, opts?: object) => void }
    w.toast("First", { duration: 5000 })
    w.toast("Second", { duration: 5000 })
  })

  await expect(page.locator("#toast-container").getByText("First")).toBeVisible()
  await expect(page.locator("#toast-container").getByText("Second")).toBeVisible()
})
