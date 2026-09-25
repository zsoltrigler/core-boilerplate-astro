import { errorId, toggleDescribedByToken } from "./aria"

// * Structural subset of a form control — lets the helper (and its unit test) run
//   without a DOM library, and accepts input/select/textarea alike.
interface FieldControl {
  id: string
  ownerDocument: { getElementById(id: string): FieldErrorElement | null }
  getAttribute(name: string): string | null
  setAttribute(name: string, value: string): void
  removeAttribute(name: string): void
}

interface FieldErrorElement {
  // * Matches lib.dom, where HTMLElement.hidden is `boolean | "until-found"`.
  hidden: boolean | "until-found"
  textContent: string | null
}

/**
 * * Shows or clears the error of a FormField-based control (Input, Select, Textarea,
 *   Combobox) from client-side code, keeping the ARIA wiring in sync:
 *   - the always-rendered `${id}-error` element (role="alert") gets the text and is
 *     un-hidden, so screen readers announce it;
 *   - the control gets aria-invalid="true", which also switches on the red field
 *     styling (see fieldStateClasses);
 *   - the error id is added to aria-describedby (first, hint id kept).
 * * `null` / `""` clears all three, so no aria-describedby reference is left dangling.
 * * Does nothing when the control has no id or no matching error element — i.e. it
 *   wasn't rendered through FormField.
 *
 * @example
 * input.addEventListener("blur", () =>
 *   setFieldError(input, input.validity.valid ? null : "Enter a valid email address.")
 * )
 */
export function setFieldError(control: FieldControl, message: string | null | undefined): void {
  const id = control.id
  if (!id) return

  const errorEl = control.ownerDocument.getElementById(errorId(id))
  if (!errorEl) return

  const hasError = Boolean(message)

  // ? Un-hide before writing the text: a role="alert" element that becomes visible with
  //   its content already inside is announced by fewer screen readers than one whose
  //   text arrives after it is in the accessibility tree.
  if (hasError) errorEl.hidden = false
  errorEl.textContent = hasError ? (message as string) : ""
  if (!hasError) errorEl.hidden = true

  if (hasError) control.setAttribute("aria-invalid", "true")
  else control.removeAttribute("aria-invalid")

  const describedBy = toggleDescribedByToken(
    control.getAttribute("aria-describedby"),
    errorId(id),
    hasError
  )
  if (describedBy) control.setAttribute("aria-describedby", describedBy)
  else control.removeAttribute("aria-describedby")
}
