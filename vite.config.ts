import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  // "./" => works from any folder: file://, GitHub Pages sub-path, etc.
  base: "./",
  // viteSingleFile => the whole app (JS + CSS) is inlined into ONE index.html
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    // The ready-to-publish site lives in /docs (GitHub Pages can serve it directly)
    outDir: path.resolve(import.meta.dirname, "docs"),
    emptyOutDir: true,
  },
  server: {
    // host: true => reachable from phone/tablet on the same Wi-Fi
    host: true,
    allowedHosts: true,
  },
});
