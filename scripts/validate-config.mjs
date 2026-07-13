// @ts-check
/* eslint-disable no-console */
import { z } from "zod"
import { COLORS, NAV_LINKS, SITE, SOCIAL_LINKS } from "../src/config.ts"

// ── Schemas ───────────────────────────────────────────────────────────────────

const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "must be a hex color like #4f46e5 or #fff")

const colorGroupSchema = z.object({
  bgBase: hexColor,
  bgSurface: hexColor,
  bgElevated: hexColor,
  textBase: hexColor,
  textMuted: hexColor,
  textInverted: hexColor,
  brandPrimary: hexColor,
  brandSecondary: hexColor,
  brandAccent: hexColor,
  borderBase: hexColor,
  borderStrong: hexColor,
  overlay: hexColor,
  statusSuccess: hexColor,
  statusWarning: hexColor,
  statusError: hexColor,
  statusInfo: hexColor,
})

// * `dark` is optional and partial — single-theme templates omit it entirely,
//   and any key present in it may still selectively override just a few colors.
const colorsSchema = colorGroupSchema.extend({
  dark: colorGroupSchema.partial().optional(),
})

// * email/twitterHandle are optional in practice (empty string is the
//   placeholder default) — only validate their *format* when non-empty.
const optionalEmail = z.union([z.literal(""), z.email("must be a valid email address")])
const optionalTwitterHandle = z.union([
  z.literal(""),
  z.string().regex(/^@/, 'must start with "@", e.g. "@yourusername"'),
])

const siteSchema = z.object({
  name: z.string().min(1, "cannot be empty"),
  description: z.string().min(1, "cannot be empty"),
  logo: z.string(),
  showName: z.boolean(),
  favicon: z.string().min(1, "cannot be empty"),
  ogImage: z.string().min(1, "cannot be empty"),
  twitterHandle: optionalTwitterHandle,
  author: z.string(),
  email: optionalEmail,
  lang: z.string().min(2, 'must be a valid language code, e.g. "en"'),
  allRightsReserved: z.string(),
  singleTheme: z.boolean(),
})

const navLinkSchema = z.object({
  label: z.string().min(1, "cannot be empty"),
  href: z.string().min(1, "cannot be empty"),
})

const socialLinkSchema = z.object({
  platform: z.string().min(1, "cannot be empty"),
  href: z.url("must be a valid URL"),
  label: z.string().min(1, "cannot be empty"),
  icon: z.string().optional(),
})

// ── Runner ────────────────────────────────────────────────────────────────────

/** Formats a Zod error into "path: message" lines prefixed with the config export name.
 * @param {string} exportName
 * @param {import("zod").ZodError} error
 * @returns {string[]}
 */
function formatIssues(exportName, error) {
  return error.issues.map((issue) => {
    const path = issue.path.length ? `.${issue.path.join(".")}` : ""
    return `  ${exportName}${path}: ${issue.message}`
  })
}

export function validateConfig() {
  /** @type {string[]} */
  const errors = []

  const colorsResult = colorsSchema.safeParse(COLORS)
  if (!colorsResult.success) errors.push(...formatIssues("COLORS", colorsResult.error))

  const siteResult = siteSchema.safeParse(SITE)
  if (!siteResult.success) errors.push(...formatIssues("SITE", siteResult.error))

  NAV_LINKS.forEach((link, i) => {
    const result = navLinkSchema.safeParse(link)
    if (!result.success) errors.push(...formatIssues(`NAV_LINKS[${i}]`, result.error))
  })

  SOCIAL_LINKS.forEach((link, i) => {
    const result = socialLinkSchema.safeParse(link)
    if (!result.success) errors.push(...formatIssues(`SOCIAL_LINKS[${i}]`, result.error))
  })

  if (errors.length > 0) {
    throw new Error(
      ["Invalid src/config.ts — fix the following before building:", ...errors].join("\n")
    )
  }
}

// * Allows direct execution: pnpm check:config
if (process.argv[1].endsWith("validate-config.mjs")) {
  validateConfig()
  console.log("[config] src/config.ts is valid.")
}
