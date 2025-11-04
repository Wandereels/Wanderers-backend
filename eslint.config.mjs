// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,cjs}"],

    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs",
      ecmaVersion: 2021,
    },

    plugins: {},

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "eqeqeq": ["error", "always"],
    },

    extends: [js.configs.recommended],
  },
]);
