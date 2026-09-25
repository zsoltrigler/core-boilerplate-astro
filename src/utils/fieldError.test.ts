import { describe, expect, it } from "vitest"
import { setFieldError } from "./fieldError"

// * Minimal stand-ins for a control and its error element — the helper only touches
//   these members, and the real-DOM behaviour is covered by tests/e2e/form-validation.spec.ts.
function setup(attrs: Record<string, string> = {}) {
  const errorEl = { hidden: true, textContent: "" as string | null }
  const attributes = new Map(Object.entries(attrs))
  const control = {
    id: "email",
    ownerDocument: { getElementById: (id: string) => (id === "email-error" ? errorEl : null) },
    getAttribute: (name: string) => attributes.get(name) ?? null,
    setAttribute: (name: string, value: string) => void attributes.set(name, value),
    removeAttribute: (name: string) => void attributes.delete(name),
  }
  return { control, errorEl, attributes }
}

describe("setFieldError", () => {
  it("shows the message, marks the control invalid and references the error element", () => {
    const { control, errorEl, attributes } = setup()
    setFieldError(control, "Enter a valid email address.")
    expect(errorEl.hidden).toBe(false)
    expect(errorEl.textContent).toBe("Enter a valid email address.")
    expect(attributes.get("aria-invalid")).toBe("true")
    expect(attributes.get("aria-describedby")).toBe("email-error")
  })

  it("keeps the hint id in aria-describedby, error first", () => {
    const { control, attributes } = setup({ "aria-describedby": "email-hint" })
    setFieldError(control, "Required.")
    expect(attributes.get("aria-describedby")).toBe("email-error email-hint")
  })

  it("does not duplicate the error id when called twice", () => {
    const { control, attributes } = setup({ "aria-describedby": "email-hint" })
    setFieldError(control, "One.")
    setFieldError(control, "Two.")
    expect(attributes.get("aria-describedby")).toBe("email-error email-hint")
  })

  it("clears the error: hides and empties the element, drops aria-invalid and the error id", () => {
    const { control, errorEl, attributes } = setup({ "aria-describedby": "email-hint" })
    setFieldError(control, "Required.")
    setFieldError(control, null)
    expect(errorEl.hidden).toBe(true)
    expect(errorEl.textContent).toBe("")
    expect(attributes.has("aria-invalid")).toBe(false)
    expect(attributes.get("aria-describedby")).toBe("email-hint")
  })

  it("removes aria-describedby entirely when the error id was the only token", () => {
    const { control, attributes } = setup()
    setFieldError(control, "Required.")
    setFieldError(control, "")
    expect(attributes.has("aria-describedby")).toBe(false)
  })

  it("clears a server-rendered error the same way", () => {
    const { control, errorEl, attributes } = setup({
      "aria-invalid": "true",
      "aria-describedby": "email-error email-hint",
    })
    errorEl.hidden = false
    errorEl.textContent = "Server said no."
    setFieldError(control, null)
    expect(errorEl.hidden).toBe(true)
    expect(attributes.has("aria-invalid")).toBe(false)
    expect(attributes.get("aria-describedby")).toBe("email-hint")
  })

  it("does nothing without a matching error element", () => {
    const { control, attributes } = setup()
    control.id = "other"
    setFieldError(control, "Required.")
    expect(attributes.size).toBe(0)
  })
})
