// @ts-check
/* eslint-disable no-console */
import { readFileSync, writeFileSync } from "node:fs"
import { createInterface } from "node:readline/promises"
import { fileURLToPath } from "node:url"
import { hexColorPattern } from "./validate-config.mjs"

const configPath = fileURLToPath(new URL("../src/config.ts", import.meta.url))

/** Reads a single field's current value out of config.ts via a capture-group regex.
 * @param {string} source
 * @param {RegExp} pattern - must have exactly one capture group around the value
 * @returns {string | undefined}
 */
function readField(source, pattern) {
  return source.match(pattern)?.[1]
}

/** Replaces a single field's value in config.ts, keeping everything else untouched.
 * @param {string} source
 * @param {RegExp} pattern - must have exactly one capture group around the value
 * @param {string} value
 * @returns {string}
 */
function writeField(source, pattern, value) {
  return source.replace(pattern, (full, oldValue) => full.replace(oldValue, value))
}

async function main() {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  // ! rl.question() called repeatedly is unreliable once stdin isn't a real TTY
  //   (e.g. piped input in a test) — only the first call resolves, the rest hang
  //   indefinitely. Pulling lines directly from the interface's async iterator
  //   works correctly for both piped and interactive input.
  const lines = rl[Symbol.asyncIterator]()
  /** @param {string} question @param {string} fallback */
  const ask = async (question, fallback) => {
    process.stdout.write(`${question} (${fallback}): `)
    const { value, done } = await lines.next()
    const answer = done ? "" : value.trim()
    return answer || fallback
  }

  console.log("\nCore Boilerplate setup wizard — press Enter to accept the default in ()\n")

  let source = readFileSync(configPath, "utf-8")

  const namePattern = /name:\s*"([^"]*)",\n\s*description:/
  const currentName = readField(source, namePattern) ?? "Core Boilerplate"
  const name = await ask("Site name", currentName)

  const descriptionPattern = /description:\s*(?:PLACEHOLDER_DESCRIPTION|"([^"]*)"),/
  const currentDescription =
    readField(source, descriptionPattern) ?? "A production-ready Astro site."
  const description = await ask("Site description (one sentence, used for SEO)", currentDescription)

  const langPattern = /lang:\s*"([^"]*)",/
  const currentLang = readField(source, langPattern) ?? "en"
  const lang = await ask('Language code (e.g. "en", "hu", "de")', currentLang)

  const brandPrimaryPattern = /brandPrimary:\s*"([^"]*)",/
  const currentBrand = readField(source, brandPrimaryPattern) ?? "#4f46e5"
  /** @type {string} */
  let brandPrimary
  for (;;) {
    brandPrimary = await ask("Brand primary color (hex)", currentBrand)
    if (hexColorPattern.test(brandPrimary)) break
    console.log(`  ✗ "${brandPrimary}" isn't a valid hex color — try again, e.g. #4f46e5`)
  }

  rl.close()

  source = writeField(source, namePattern, name)
  // * The description line starts out as the PLACEHOLDER_DESCRIPTION const reference,
  //   not a string literal — replace the whole right-hand side, not just a captured group.
  source = source.replace(descriptionPattern, `description: "${description}",`)
  source = writeField(source, langPattern, lang)
  source = writeField(source, brandPrimaryPattern, brandPrimary)

  writeFileSync(configPath, source)

  console.log("\n✓ src/config.ts updated.\n")
  console.log("Still to do by hand (see README.md → After cloning):")
  console.log("  2. Replace public/og-default.jpg (1200×630px JPG or PNG)")
  console.log("  3. Replace the favicon (public/favicon.svg + .ico/.png variants)")
  console.log(
    "  4. Delete src/pages/ui.astro and src/components/showcase/ when done referencing them\n"
  )
}

main()
