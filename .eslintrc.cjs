module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
  ],
  ignorePatterns: ["out", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["import", "unicorn"],
  rules: {
    /**
     * Requires a third-party hosting service to serve images.
     * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#image-optimization
     * @see https://nextjs.org/docs/messages/no-img-element#possible-ways-to-fix-it
     * */
    "@next/next/no-img-element": "off",

    // "import/order": [
    //   "error",
    //   {
    //     groups: [["builtin", "external"], "internal", ["parent", "sibling"], "type"],
    //     pathGroups: [{ group: "builtin", pattern: "react", position: "before" }],
    //     pathGroupsExcludedImportTypes: ["builtin"],
    //     distinctGroup: false,
    //     "newlines-between": "always",
    //     alphabetize: { order: "asc", caseInsensitive: false },
    //   },
    // ],
  },
};
