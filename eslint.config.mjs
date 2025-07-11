import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], 
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...globals.node,
        // 添加 uni-app 全局变量
        uni: true,
        wx: true,
        WechatMiniprogram: true,
        getCurrentPages: true,
        getApp: true,
        UniApp: true,
        UniHelper: true,
        App: true,
        Page: true,
        Component: true,
        AnyObject: true,
      }
    } 
  },
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  
  // 添加自定义规则配置
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-setup-props-destructure': 'off',
      'vue/no-deprecated-html-element-is': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    }
  }
]);
