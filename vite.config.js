import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from '@andylacko/vite-svg-react-loader'
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  plugins: [
    react(),
    svgLoader(),
    vitePluginRequire({
			// @fileRegex RegExp
			// optional：default file processing rules are as follows
			// fileRegex:/(.jsx?|.tsx?|.vue)$/
		}),
  ]
})
