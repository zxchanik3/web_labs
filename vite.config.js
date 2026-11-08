import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [
    ViteEjsPlugin()
  ],
  server: { 
    port: 5173, 
    open: true 
  },
  preview: { 
    port: 4173 
  },
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        courses: resolve(__dirname, "courses.html"),
        courseDetails: resolve(__dirname, "course-details.html"),
        enrollment: resolve(__dirname, "enrollment.html")
      }
    }
  }
});