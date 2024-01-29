import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from '@andylacko/vite-svg-react-loader'
import { ssr } from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  plugins: [
    react(),
    svgLoader(),
    ssr({ prerender: true })
  ]
})
