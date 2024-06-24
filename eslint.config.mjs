import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

// Konfigurasi ESLint menggunakan ES modules
export default [
  { 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { 
    files: ["**/*.jsx"], 
    languageOptions: { 
      parserOptions: { 
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json" 
      } 
    } 
  },
  pluginReactConfig, 
  {
    // Menambahkan "extends" untuk konfigurasi tambahan
    extends: [
      "plugin:react/recommended",
      "standard-with-typescript",
      "prettier"
    ]
  }
];
