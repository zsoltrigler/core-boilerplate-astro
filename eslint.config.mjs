import js from "@eslint/js"
import ts from "typescript-eslint"
import astro from "eslint-plugin-astro"

const nodeGlobals = { process: "readonly", console: "readonly", URL: "readonly" }

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  {
    rules: {
      // * Allow explicit `any` only with a comment — too noisy to ban outright in Astro projects
      "@typescript-eslint/no-explicit-any": "warn",
      // * Unused vars are always bugs; prefix with _ to opt out
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "no-console": "warn",
    },
  },
  {
    // * Node.js scripts and config files run in Node, not the browser
    files: ["*.config.mjs", "scripts/**/*.mjs"],
    languageOptions: { globals: nodeGlobals },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
]
