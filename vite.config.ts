import { defineConfig } from "vite";
import path from "node:path";
import terser from "@rollup/plugin-terser";

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
      plugins: [
        terser({
          ecma: 2020,

          module: true,

          compress: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
