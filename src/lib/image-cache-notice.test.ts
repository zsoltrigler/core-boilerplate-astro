import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { imageCacheNotice, isImageCacheCold } from "../../scripts/image-cache-notice.mjs"

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

describe("imageCacheNotice", () => {
  let root: string
  const logger = { warn: vi.fn() }

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), "image-cache-"))
    logger.warn.mockClear()
  })
  afterEach(() => {
    vi.unstubAllEnvs()
    rmSync(root, { recursive: true, force: true })
  })

  /** Runs the three hooks; `encode` simulates images being written during the build. */
  function runBuild(encode: boolean) {
    const hooks = imageCacheNotice().hooks
    hooks["astro:config:done"]({ config: { cacheDir: pathToFileURL(root + "/") } })
    hooks["astro:build:start"]()
    if (encode) {
      mkdirSync(join(root, "assets"), { recursive: true })
      writeFileSync(join(root, "assets", "a.webp"), "x")
    }
    hooks["astro:build:done"]({ logger })
  }

  it("warns when the cache was empty and images were encoded on a CI host", () => {
    vi.stubEnv("CI", "true")
    runBuild(true)
    expect(logger.warn).toHaveBeenCalledOnce()
  })

  it("stays silent when no images were encoded (nothing to cache)", () => {
    vi.stubEnv("CI", "true")
    runBuild(false)
    expect(logger.warn).not.toHaveBeenCalled()
  })

  it("stays silent when the cache was already warm", () => {
    vi.stubEnv("CI", "true")
    mkdirSync(join(root, "assets"))
    writeFileSync(join(root, "assets", "old.webp"), "x")
    runBuild(true)
    expect(logger.warn).not.toHaveBeenCalled()
  })

  it("never warns outside CI/deploy environments", () => {
    for (const k of ["CI", "WORKERS_CI", "VERCEL", "NETLIFY"]) vi.stubEnv(k, "")
    runBuild(true)
    expect(logger.warn).not.toHaveBeenCalled()
  })
})
