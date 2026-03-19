import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  deps: {
    alwaysBundle: ["@actions/core", "@actions/exec", "adm-zip"],
    onlyBundle: false,
  },
});
