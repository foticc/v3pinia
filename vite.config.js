import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"

const pathSrc = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${pathSrc}/`,
    },
  },
  plugins: [vue()],
})
