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
