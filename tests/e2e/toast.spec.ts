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

test("action button fires onClick and dismisses immediately", async ({ page }) => {
  await page.evaluate(() => {
    const w = window as unknown as {
      toast: (msg: string, opts?: object) => void
      __undoClicked?: boolean
    }
    w.toast("Row deleted.", {
      duration: 10000,
      action: {
        label: "Undo",
        onClick: () => {
          w.__undoClicked = true
        },
      },
    })
  })

  const toast = page.locator("#toast-container").getByText("Row deleted.")
  await expect(toast).toBeVisible()

  await page.locator("#toast-container").getByRole("button", { name: "Undo" }).click()

  await expect(toast).toBeHidden()
  await expect
    .poll(() =>
      page.evaluate(() => (window as unknown as { __undoClicked?: boolean }).__undoClicked)
    )
    .toBe(true)
})

test("showcase undo trigger renders an actionable toast", async ({ page }) => {
  await page.getByRole("button", { name: "Delete row" }).click()

  const toast = page.locator("#toast-container").getByText("Row deleted.")
  await expect(toast).toBeVisible()

  await page.locator("#toast-container").getByRole("button", { name: "Undo" }).click()
  await expect(toast).toBeHidden()
  await expect(page.locator("#toast-container").getByText("Delete undone.")).toBeVisible()
})
