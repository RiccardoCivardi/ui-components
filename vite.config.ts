import { defineConfig } from "vite";
import path from "node:path";
import minifyHTML from "rollup-plugin-minify-html-literals";
import { rollupPluginHTML as html } from "@web/rollup-plugin-html";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "UiComponents",
      fileName: "ui-components",
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        globals: {
          lit: "Lit",
        },
      },
      plugins: [html()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
