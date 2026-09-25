// * Id conventions shared by FormField (which renders the elements), ariaDescribedBy
//   (server-side wiring) and setFieldError (client-side wiring) — one place, so the
//   three can never drift apart.
export const errorId = (id: string): string => `${id}-error`
export const hintId = (id: string): string => `${id}-hint`

export function ariaDescribedBy(
  id: string,
  { error, hint }: { error?: string; hint?: string }
): string | undefined {
  return (
    [error && errorId(id), hint && hintId(id)].filter((x): x is string => !!x).join(" ") ||
    undefined
  )
}

/**
 * * Adds or removes one id in a space-separated aria-describedby value, keeping every
 *   other token (the hint id, or one the consumer added themselves) untouched.
 * * A token that is added goes first — the same order ariaDescribedBy produces for a
 *   server-rendered error, so client- and server-side errors read identically.
 * * Returns undefined when nothing is left, so the caller can drop the attribute
 *   instead of leaving an empty aria-describedby behind.
 */
export function toggleDescribedByToken(
  current: string | null | undefined,
  token: string,
  on: boolean
): string | undefined {
  const rest = (current ?? "").split(/\s+/).filter((t) => t && t !== token)
  return (on ? [token, ...rest] : rest).join(" ") || undefined
}
