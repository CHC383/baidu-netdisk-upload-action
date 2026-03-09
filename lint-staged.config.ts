export default {
  "package.json": () => ["pnpm install", "pnpm check-dist"],
  "src/**/*.ts": (stagedFiles: string[]) => [
    `eslint --fix --no-warn-ignored ${stagedFiles.join(" ")}`,
    `prettier --write --ignore-unknown ${stagedFiles.join(" ")}`,
    "pnpm check-dist",
  ],
};
