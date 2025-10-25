import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Relative paths for assets so Vercel serves them correctly
  base: "./",

  build: {
    outDir: "dist", // matches vercel.json outputDirectory
    emptyOutDir: true, // clear old build files
  },
});
