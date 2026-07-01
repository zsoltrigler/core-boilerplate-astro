/** Build the aria-describedby attribute value from optional error and hint IDs.
 * Returns undefined when neither is set so the attribute is omitted entirely.
 */
export function ariaDescribedBy(
  id: string,
  { error, hint }: { error?: string; hint?: string }
): string | undefined {
  return (
    [error && `${id}-error`, hint && `${id}-hint`]
      .filter((x): x is string => !!x)
      .join(" ") || undefined
  )
}
