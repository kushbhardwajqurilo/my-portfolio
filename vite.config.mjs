import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Important: relative paths for assets so Vercel serves them correctly
  base: "./",

  build: {
    outDir: "dist", // your current folder is fine
    emptyOutDir: true, // clears dist folder before build
  },

  server: {
    port: 3000,
  },
});
