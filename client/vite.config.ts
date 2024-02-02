
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  plugins: [
    react(),  
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  build: {
    outDir: "./build",
  },
});