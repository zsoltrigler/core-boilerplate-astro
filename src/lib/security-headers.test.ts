import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { SECURITY_HEADERS, toHeadersFile, toVercelHeaders } from "./security-headers"
import { THEME_SCRIPT } from "./theme-script"

const read = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), "utf8")

describe("security headers", () => {
  it("public/_headers matches the shared header list", () => {
    expect(read("public/_headers")).toBe(toHeadersFile())
  })

  it("vercel.json headers match the shared header list", () => {
    expect(JSON.parse(read("vercel.json")).headers).toEqual(toVercelHeaders())
  })

  it("sends the baseline headers and frame-ancestors", () => {
    expect(Object.keys(SECURITY_HEADERS)).toEqual(
      expect.arrayContaining([
        "X-Content-Type-Options",
        "Referrer-Policy",
        "Permissions-Policy",
        "X-Frame-Options",
        "Content-Security-Policy",
      ])
    )
    expect(SECURITY_HEADERS["Content-Security-Policy"]).toContain("frame-ancestors")
  })

  it("does not set HSTS from code (hosting setting)", () => {
    expect(SECURITY_HEADERS).not.toHaveProperty("Strict-Transport-Security")
  })
})

describe("theme script", () => {
  it("is a single line, so its CSP hash can't drift on whitespace edits", () => {
    expect(THEME_SCRIPT).not.toMatch(/\n/)
  })
})
