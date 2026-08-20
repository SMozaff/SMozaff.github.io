import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(rootDir, "site-src"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "site-src", "src"),
    },
  },
  build: {
    outDir: path.resolve(rootDir, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(rootDir, "site-src", "index.html"),
        fa: path.resolve(rootDir, "site-src", "fa", "index.html"),
      },
    },
  },
});
