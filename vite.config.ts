import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  mode: "production",
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
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
