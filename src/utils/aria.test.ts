import { describe, expect, it } from "vitest"
import { ariaDescribedBy } from "./aria"

describe("ariaDescribedBy", () => {
  it("returns undefined when neither error nor hint is set", () => {
    expect(ariaDescribedBy("field", {})).toBeUndefined()
  })

  it("returns the hint id when only hint is set", () => {
    expect(ariaDescribedBy("field", { hint: "Some hint" })).toBe("field-hint")
  })

  it("returns the error id when only error is set", () => {
    expect(ariaDescribedBy("field", { error: "Some error" })).toBe("field-error")
  })

  it("returns both ids, error first, when both are set", () => {
    expect(ariaDescribedBy("field", { error: "Some error", hint: "Some hint" })).toBe(
      "field-error field-hint"
    )
  })
})
