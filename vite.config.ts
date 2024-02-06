import { defineConfig } from "vite";
import path from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  mode: "production",
  plugins: [dts({ rollupTypes: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
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
});
