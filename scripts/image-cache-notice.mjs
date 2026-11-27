import { existsSync, readdirSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { join } from "node:path"

// * Only deploy/CI environments warn; a local build never does.
const ON_HOST = () =>
  Boolean(process.env.CI || process.env.WORKERS_CI || process.env.VERCEL || process.env.NETLIFY)

/** True when Astro's image cache (`<cacheDir>/assets`) is missing or empty. */
export function isImageCacheCold(cacheDir) {
  const dir = join(fileURLToPath(cacheDir), "assets")
  return !existsSync(dir) || readdirSync(dir).length === 0
}

/**
 * Astro integration: warns (never fails) when a CI/deploy build had to encode images from scratch.
 * It only speaks when the cache was empty at build start AND filled up during the build — i.e.
 * images were really encoded and would be lost again. A project without optimised images keeps an
 * empty cache either way and stays silent.
 */
export function imageCacheNotice() {
  let cacheDir
  let coldAtStart = false
  return {
    name: "image-cache-notice",
    hooks: {
      "astro:config:done": ({ config }) => {
        cacheDir = config.cacheDir
      },
      "astro:build:start": () => {
        coldAtStart = Boolean(ON_HOST() && cacheDir && isImageCacheCold(cacheDir))
      },
      "astro:build:done": ({ logger }) => {
        if (coldAtStart && !isImageCacheCold(cacheDir)) {
          logger.warn(
            "Image cache was empty: every picture was encoded from scratch. Turn on the host's build cache (Cloudflare: Workers Builds → Settings → Build cache) so node_modules/.astro/assets is kept between builds."
          )
        }
      },
    },
  }
}
