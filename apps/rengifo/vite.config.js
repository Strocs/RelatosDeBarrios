import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from '@andylacko/vite-svg-react-loader'
import { brandConfig } from '@relatos/content'

// https://vitejs.dev/config/
export default defineConfig({
  base: brandConfig.paths.rengifo,
  plugins: [react(), svgLoader()],
})
