import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { isImageCacheCold } from "../../scripts/image-cache-notice.mjs"

describe("isImageCacheCold", () => {
  let root: string
  const cacheDir = () => pathToFileURL(root + "/")

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), "image-cache-"))
  })
  afterEach(() => rmSync(root, { recursive: true, force: true }))

  it("is cold when the assets directory is missing", () => {
    expect(isImageCacheCold(cacheDir())).toBe(true)
  })

  it("is cold when the assets directory is empty", () => {
    mkdirSync(join(root, "assets"))
    expect(isImageCacheCold(cacheDir())).toBe(true)
  })

  it("is warm when the assets directory has files", () => {
    mkdirSync(join(root, "assets"))
    writeFileSync(join(root, "assets", "a.webp"), "x")
    expect(isImageCacheCold(cacheDir())).toBe(false)
  })
})
