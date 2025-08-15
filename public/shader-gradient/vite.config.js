// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": JSON.stringify({}),
    global: "globalThis",
  },
  build: {
    lib: {
      entry: "src/main.jsx",
      name: "ShaderBGWidget",
      formats: ["iife"],
      fileName: () => "shaderbg-widget.js",
    },
    rollupOptions: { external: [] },
    sourcemap: false,
    target: "es2019",
  },
});
