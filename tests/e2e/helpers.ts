import type { Page } from "@playwright/test"

/**
 * * Opens a /ui showcase section and waits until the hash scroll has finished.
 * ! global.css sets `scroll-behavior: smooth`, so right after `goto("/ui#x")` the page is still
 *   scrolling (WebKit especially). Hovering/clicking then races the moving target — the pointer
 *   leaves the element mid-scroll — which made the Tooltip and Drawer specs flaky.
 */
export async function gotoSection(page: Page, id?: string) {
  await page.goto(id ? `/ui#${id}` : "/ui")
  await page.waitForFunction(
    () =>
      new Promise<boolean>((resolve) => {
        let last = window.scrollY
        let stableFrames = 0
        const tick = () => {
          stableFrames = window.scrollY === last ? stableFrames + 1 : 0
          last = window.scrollY
          if (stableFrames >= 10) resolve(true)
          else requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
  )
}
