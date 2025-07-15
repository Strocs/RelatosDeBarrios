import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from '@andylacko/vite-svg-react-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3002,
  },
  plugins: [react(), svgLoader()],
})
