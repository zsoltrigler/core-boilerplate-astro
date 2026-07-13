import { describe, expect, it } from "vitest"
import { FIELD_SIZES, fieldStateClasses } from "./fieldStyles"

describe("fieldStateClasses", () => {
  it("returns the default border classes without an error", () => {
    const classes = fieldStateClasses()
    expect(classes).toContain("border-(--color-border-base)")
    expect(classes).not.toContain("border-(--color-status-error)")
  })

  it("returns the error border/ring classes when an error is passed", () => {
    const classes = fieldStateClasses("Required field")
    expect(classes).toContain("border-(--color-status-error)")
    expect(classes).toContain("focus:ring-(--color-status-error)/40")
    expect(classes).not.toContain("border-(--color-border-base)")
  })
})

describe("FIELD_SIZES", () => {
  it("defines a class string for every size variant", () => {
    expect(Object.keys(FIELD_SIZES)).toEqual(["sm", "md", "lg"])
    expect(FIELD_SIZES.sm).toContain("h-8")
    expect(FIELD_SIZES.md).toContain("h-10")
    expect(FIELD_SIZES.lg).toContain("h-12")
  })
})
