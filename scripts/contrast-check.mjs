// @ts-check
/* eslint-disable no-console */
import { hex } from "wcag-contrast"
import { COLORS } from "../src/config.ts"

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Logs a warning locally; throws in CI to block the build.
 * @param {string} msg
 */
function warnOrThrow(msg) {
  if (process.env.CI) throw new Error(msg)
  console.warn(msg)
}

// ── Contrast pairs ────────────────────────────────────────────────────────────
// * All pairs enforce WCAG AA minimum: 4.5:1 for normal text.
// * Status colors as text on bgBase also validates the inverse (e.g. white text
//   on a status-colored button background) because contrast is symmetric.

const contrastPairs = [
  // Light mode — text on backgrounds
  { name: "textBase on bgBase (light)", fg: COLORS.textBase, bg: COLORS.bgBase, min: 4.5 },
  { name: "textMuted on bgBase (light)", fg: COLORS.textMuted, bg: COLORS.bgBase, min: 4.5 },
  { name: "textBase on bgSurface (light)", fg: COLORS.textBase, bg: COLORS.bgSurface, min: 4.5 },
  { name: "textMuted on bgSurface (light)", fg: COLORS.textMuted, bg: COLORS.bgSurface, min: 4.5 },
  { name: "textBase on bgElevated (light)", fg: COLORS.textBase, bg: COLORS.bgElevated, min: 4.5 },
  {
    name: "textMuted on bgElevated (light)",
    fg: COLORS.textMuted,
    bg: COLORS.bgElevated,
    min: 4.5,
  },
  {
    name: "textInverted on brandPrimary (light)",
    fg: COLORS.textInverted,
    bg: COLORS.brandPrimary,
    min: 4.5,
  },

  // Dark mode — text on backgrounds
  { name: "textBase on bgBase (dark)", fg: COLORS.dark.textBase, bg: COLORS.dark.bgBase, min: 4.5 },
  {
    name: "textMuted on bgBase (dark)",
    fg: COLORS.dark.textMuted,
    bg: COLORS.dark.bgBase,
    min: 4.5,
  },
  {
    name: "textBase on bgSurface (dark)",
    fg: COLORS.dark.textBase,
    bg: COLORS.dark.bgSurface,
    min: 4.5,
  },
  {
    name: "textMuted on bgSurface (dark)",
    fg: COLORS.dark.textMuted,
    bg: COLORS.dark.bgSurface,
    min: 4.5,
  },
  {
    name: "textBase on bgElevated (dark)",
    fg: COLORS.dark.textBase,
    bg: COLORS.dark.bgElevated,
    min: 4.5,
  },
  {
    name: "textMuted on bgElevated (dark)",
    fg: COLORS.dark.textMuted,
    bg: COLORS.dark.bgElevated,
    min: 4.5,
  },
  {
    name: "textInverted on brandPrimary (dark)",
    fg: COLORS.textInverted,
    bg: COLORS.dark.brandPrimary,
    min: 4.5,
  },

  // Status colors as text on light bg (Badge, Alert)
  {
    name: "statusSuccess on bgBase (light)",
    fg: COLORS.statusSuccess,
    bg: COLORS.bgBase,
    min: 4.5,
  },
  {
    name: "statusWarning on bgBase (light)",
    fg: COLORS.statusWarning,
    bg: COLORS.bgBase,
    min: 4.5,
  },
  { name: "statusError on bgBase (light)", fg: COLORS.statusError, bg: COLORS.bgBase, min: 4.5 },
  { name: "statusInfo on bgBase (light)", fg: COLORS.statusInfo, bg: COLORS.bgBase, min: 4.5 },

  // Status colors as text on dark bg (Badge, Alert in dark mode)
  {
    name: "statusSuccess on bgBase (dark)",
    fg: COLORS.dark.statusSuccess,
    bg: COLORS.dark.bgBase,
    min: 4.5,
  },
  {
    name: "statusWarning on bgBase (dark)",
    fg: COLORS.dark.statusWarning,
    bg: COLORS.dark.bgBase,
    min: 4.5,
  },
  {
    name: "statusError on bgBase (dark)",
    fg: COLORS.dark.statusError,
    bg: COLORS.dark.bgBase,
    min: 4.5,
  },
  {
    name: "statusInfo on bgBase (dark)",
    fg: COLORS.dark.statusInfo,
    bg: COLORS.dark.bgBase,
    min: 4.5,
  },
]

// ── Runner ────────────────────────────────────────────────────────────────────

export function runContrastChecks() {
  for (const { name, fg, bg, min } of contrastPairs) {
    const ratio = hex(fg, bg)
    if (ratio < min) {
      warnOrThrow(
        `[contrast] FAIL "${name}": ${ratio.toFixed(2)}:1 (min ${min}:1) — fix COLORS in src/config.ts`
      )
    }
  }
}

// * Allows direct execution: pnpm check:contrast
if (process.argv[1].endsWith("contrast-check.mjs")) {
  runContrastChecks()
}
