// * Shared across Input, Select, Textarea, Combobox — border/focus/error/disabled
//   state recipe is identical for every field control regardless of element type.
export function fieldStateClasses(error?: string): string {
  return [
    "outline-none transition-colors duration-200",
    "focus:ring-2 focus:ring-(--color-brand-primary)/40 focus:border-(--color-brand-primary)",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    error
      ? "border-(--color-status-error) focus:ring-(--color-status-error)/40 focus:border-(--color-status-error)"
      : "border-(--color-border-base) hover:border-(--color-border-strong)",
  ].join(" ")
}

// * Height/padding/font-size/radius scale for single-line field controls
//   (Input, Select, Combobox). Textarea grows vertically so it doesn't use this.
export const FIELD_SIZES: Record<"sm" | "md" | "lg", string> = {
  sm: "h-8  px-3 text-sm  rounded-md",
  md: "h-10 px-4 text-base rounded-lg",
  lg: "h-12 px-5 text-lg  rounded-xl",
}
