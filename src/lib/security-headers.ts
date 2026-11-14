// * Single source of truth for the static security response headers.
// ! `public/_headers` (Cloudflare Pages / Netlify) and the `headers` block of
//   `vercel.json` are generated from this list and kept in sync by
//   `security-headers.test.ts` — edit here, then run `pnpm test` to see the diff.
// ? Content-Security-Policy itself lives in `astro.config.mjs` (`security.csp`):
//   Astro emits it as a <meta> tag with per-build hashes. `frame-ancestors` is
//   ignored in <meta> CSPs, so it stays here as a real header.
// ? HSTS is deliberately absent — it is a hosting/zone setting, see CONTRIBUTING.md.

export const SECURITY_HEADERS: Readonly<Record<string, string>> = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "X-Frame-Options": "DENY",
  "Content-Security-Policy": "frame-ancestors 'none'",
}

/** Renders the `public/_headers` file (Cloudflare Pages / Netlify format). */
export function toHeadersFile(headers: Readonly<Record<string, string>> = SECURITY_HEADERS) {
  const lines = Object.entries(headers).map(([key, value]) => `  ${key}: ${value}`)
  return `# Generated from src/lib/security-headers.ts — edit there, not here.\n/*\n${lines.join("\n")}\n`
}

/** Renders the `headers` entry of `vercel.json`. */
export function toVercelHeaders(headers: Readonly<Record<string, string>> = SECURITY_HEADERS) {
  return [
    {
      source: "/(.*)",
      headers: Object.entries(headers).map(([key, value]) => ({ key, value })),
    },
  ]
}
