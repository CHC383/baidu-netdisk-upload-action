export default {
  "package.json": () => ["pnpm install", "./scripts/check_dist.sh"],
  "src/**/*.ts": (stagedFiles: string[]) => [
    `eslint --fix --no-warn-ignored ${stagedFiles.join(" ")}`,
    `prettier --write --ignore-unknown ${stagedFiles.join(" ")}`,
    "./scripts/check_dist.sh",
  ],
};
