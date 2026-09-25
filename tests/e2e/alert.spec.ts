import { expect, test } from "@playwright/test"
import { gotoSection } from "./helpers"

test.beforeEach(async ({ page }) => {
  await gotoSection(page, "alert")
})

test("dismissible alert is removed from the DOM on dismiss-button click", async ({ page }) => {
  const dismissibleAlert = page.getByRole("alert").filter({ hasText: "Dismissible" })
  await expect(dismissibleAlert).toBeVisible()

  await dismissibleAlert.getByRole("button", { name: "Dismiss" }).click()

  await expect(dismissibleAlert).not.toBeAttached()
})

test("non-dismissible alerts have no dismiss button", async ({ page }) => {
  const infoAlert = page.getByRole("alert").filter({ hasText: "Information" })
  await expect(infoAlert).toBeVisible()
  await expect(infoAlert.getByRole("button", { name: "Dismiss" })).toHaveCount(0)
})
