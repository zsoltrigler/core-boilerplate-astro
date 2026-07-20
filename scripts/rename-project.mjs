// @ts-check
/* eslint-disable no-console */
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { execFileSync } from "node:child_process"
import { createInterface } from "node:readline/promises"
import { fileURLToPath } from "node:url"

const rootDir = fileURLToPath(new URL("..", import.meta.url))
const packageJsonPath = fileURLToPath(new URL("../package.json", import.meta.url))
const manifestPath = fileURLToPath(new URL("../.release-please-manifest.json", import.meta.url))
const changelogPath = fileURLToPath(new URL("../CHANGELOG.md", import.meta.url))

const projectNamePattern = /^[a-z0-9][a-z0-9-]*$/
const semverPattern = /^\d+\.\d+\.\d+$/

/** @param {string[]} args @returns {string | null} */
function git(args) {
  try {
    return execFileSync("git", args, { cwd: rootDir, encoding: "utf-8" }).trim()
  } catch {
    return null
  }
}

/** Detects how this checkout was initialised, since release-please anchors
 * its version bump to a `<package-name>-v<version>` git tag — if that tag
 * doesn't exist under the *current* package name, it falls back to the
 * oldest reachable commit and folds the entire inherited history into one
 * release. This only matters when git history + old tags are present.
 */
function detectInitMode() {
  if (!existsSync(`${rootDir}/.git`)) {
    return { hasGit: false, hasHistory: false, oldTagPrefixes: [] }
  }

  const revCount = git(["rev-list", "--count", "HEAD"])
  const hasHistory = revCount !== null && Number(revCount) > 1

  const allTags = git(["tag", "-l"])?.split("\n").filter(Boolean) ?? []
  const tagPattern = /^(.+)-v\d+\.\d+\.\d+$/
  const oldTagPrefixes = [
    ...new Set(allTags.map((t) => t.match(tagPattern)?.[1]).filter((p) => p !== undefined)),
  ]

  return { hasGit: true, hasHistory, oldTagPrefixes }
}

async function main() {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const lines = rl[Symbol.asyncIterator]()
  /** @param {string} question @param {string} fallback */
  const ask = async (question, fallback) => {
    process.stdout.write(`${question} (${fallback}): `)
    const { value, done } = await lines.next()
    const answer = done ? "" : value.trim()
    return answer || fallback
  }

  console.log("\nCore Boilerplate project renamer\n")

  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"))
  const currentName = packageJson.name

  let newName
  for (;;) {
    newName = await ask("New project name (npm-safe, e.g. my-project)", currentName)
    if (projectNamePattern.test(newName)) break
    console.log(`  ✗ "${newName}" isn't a valid package name — lowercase, digits, hyphens only`)
  }

  let startVersion
  for (;;) {
    startVersion = await ask("Starting version", "0.1.0")
    if (semverPattern.test(startVersion)) break
    console.log(`  ✗ "${startVersion}" isn't a valid semver, e.g. 0.1.0`)
  }

  rl.close()

  const { hasGit, hasHistory, oldTagPrefixes } = detectInitMode()
  const inheritedHistory = hasGit && hasHistory && oldTagPrefixes.length > 0
  const staleNameTags = oldTagPrefixes.filter((p) => p !== newName)

  console.log("\nDetected:")
  console.log(
    `  git history:        ${hasGit ? (hasHistory ? "multiple commits" : "single/no commit") : "no"}`
  )
  console.log(
    `  inherited old tags:  ${oldTagPrefixes.length ? oldTagPrefixes.join(", ") : "none"}`
  )

  // * package.json — always
  packageJson.name = newName
  writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
  console.log(`\n✓ package.json: "${currentName}" → "${newName}"`)

  // * .release-please-manifest.json — always reset to the new starting version
  if (existsSync(manifestPath)) {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"))
    for (const key of Object.keys(manifest)) manifest[key] = startVersion
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
    console.log(`✓ .release-please-manifest.json reset to ${startVersion}`)
  }

  // * CHANGELOG.md — always reset, the inherited boilerplate history is irrelevant
  writeFileSync(changelogPath, "# Changelog\n")
  console.log("✓ CHANGELOG.md cleared")

  // * The dangerous case: history + tags under an old package name survive in this
  //   checkout, but no tag exists yet under the new name — release-please has
  //   nothing to anchor to and will fold the whole inherited history into one release.
  let tagCreated = false
  if (inheritedHistory && staleNameTags.length > 0) {
    const newTag = `${newName}-v${startVersion}`
    const existingNewTag = git(["tag", "-l", newTag])
    if (!existingNewTag) {
      const created = git(["tag", newTag, "HEAD"])
      tagCreated = created !== null
      if (tagCreated) {
        console.log(`✓ Created anchor tag "${newTag}" on HEAD`)
      } else {
        console.log(`✗ Failed to create tag "${newTag}" — create it manually: git tag ${newTag}`)
      }
    } else {
      console.log(`  Tag "${newTag}" already exists — left untouched`)
    }
  }

  console.log("\nSummary")
  console.log("───────")
  if (!hasGit) {
    console.log("No git repository detected — nothing tag-related to do.")
    console.log("Run `git init` yourself if you want version control from the start.")
  } else if (!inheritedHistory || staleNameTags.length === 0) {
    console.log("Fresh git history (or no inherited tags) — no anchor tag needed.")
  } else {
    console.log(
      `This checkout carries inherited history and tags from "${oldTagPrefixes.join(", ")}".`
    )
    if (tagCreated) {
      console.log(
        `A "${newName}-v${startVersion}" tag was created on HEAD so release-please anchors correctly.`
      )
    }
    console.log(
      "\n⚠ If you already pushed commits from this checkout under the old name/manifest,\n" +
        "  release-please may already be tracking the wrong state remotely. Push this tag\n" +
        "  (`git push origin " +
        `${newName}-v${startVersion}` +
        "`) before your next push, and if a bad\n" +
        "  release/PR was already created and merged, it needs to be reverted by hand —\n" +
        "  this script only fixes local state."
    )
  }
  console.log("")
}

main()
