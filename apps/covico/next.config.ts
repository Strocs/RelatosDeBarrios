import type { NextConfig } from 'next'
import { brandConfig } from '@relatos/content'

const nextConfig: NextConfig = {
  basePath: brandConfig.paths.covico,
}

export default nextConfig
