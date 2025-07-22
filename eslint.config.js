import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
  {
    ignores: [
      ".nuxt/**",
      ".output/**",
      "node_modules/**",
      "dist/**",
    ],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...pluginVue.configs['flat/recommended'],

  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,vue}"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
    languageOptions: {
      parser: vueParser, 
      parserOptions: {
        parser: tseslint.parser, 
        
        project: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: [".vue"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        'clearError': 'readonly',
        'useRoute': 'readonly',
        'useRouter': 'readonly',
        'createError': 'readonly',
        'useFetch': 'readonly',
        'useHead': 'readonly',
      },
    },
  },
];