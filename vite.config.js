import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
    },
    clearScreen: false,
    resolve: {
        extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
        alias: {
            "~@fontsource": "@fontsource",
            "~suitcss-base": "suitcss-base",
            "~modern-normalize": "modern-normalize",
        },
    },
})
