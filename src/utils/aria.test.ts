import { describe, expect, it } from "vitest"
import { ariaDescribedBy, errorId, hintId, toggleDescribedByToken } from "./aria"

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

describe("errorId / hintId", () => {
  it("derive the ids FormField renders", () => {
    expect(errorId("field")).toBe("field-error")
    expect(hintId("field")).toBe("field-hint")
  })
})

describe("toggleDescribedByToken", () => {
  it("adds the token first and keeps the others", () => {
    expect(toggleDescribedByToken("field-hint", "field-error", true)).toBe("field-error field-hint")
  })

  it("does not duplicate a token that is already present", () => {
    expect(toggleDescribedByToken("field-error field-hint", "field-error", true)).toBe(
      "field-error field-hint"
    )
  })

  it("removes only the given token", () => {
    expect(toggleDescribedByToken("field-error field-hint", "field-error", false)).toBe(
      "field-hint"
    )
  })

  it("returns undefined when nothing is left, or there was nothing to start with", () => {
    expect(toggleDescribedByToken("field-error", "field-error", false)).toBeUndefined()
    expect(toggleDescribedByToken(null, "field-error", false)).toBeUndefined()
  })
})
