export default {
  "package.json": () => ["pnpm install", "pnpm check-dist"],
  "src/**/*.ts": (stagedFiles: string[]) => [
    `pnpm biome:check-fix ${stagedFiles.join(" ")}`,
    "pnpm check-dist",
  ],
};
