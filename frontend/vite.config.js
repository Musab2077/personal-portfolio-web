import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    // Raise warning threshold slightly (default 500kb)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunking: split vendor libs from app code
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-aos": ["aos"],
          "vendor-icons": [
            "react-icons/pi",
            "react-icons/md",
            "react-icons/ri",
            "react-icons/rx",
            "react-icons/fi",
            "react-icons/fa",
            "react-icons/fa6",
            "react-icons/si",
            "react-icons/lu",
            "react-icons/vsc",
          ],
        },
      },
    },

    // Minify with esbuild (default, fastest)
    minify: "esbuild",

    // Generate source maps for debugging (remove for final prod if desired)
    sourcemap: false,

    // Target modern browsers — smaller output
    target: "es2020",
  },

  // Enable gzip/brotli hint in preview
  preview: {
    port: 4173,
    strictPort: true,
  },
});
