import { defineConfig, globalIgnores } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import eslintjs from "@eslint/js";
import { configs as tseConfigs } from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { flatConfigs as eslintPluginImportXConfigs } from "eslint-plugin-import-x";

export default defineConfig(
    globalIgnores(["node_modules/*", "dist/*"]),
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["eslint.config.ts"],
                },
                tsconfigRootDir: import.meta.dirname,
                parser: tsParser,
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                ...globals.node,
            },
        },
    },
    eslintjs.configs.recommended,
    tseConfigs.recommendedTypeChecked,
    tseConfigs.stylisticTypeChecked,
    // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/11543
    eslintPluginImportXConfigs.recommended,
    eslintPluginImportXConfigs.typescript,
    eslintPluginUnicorn.configs.recommended,
    eslintConfigPrettier,
);
