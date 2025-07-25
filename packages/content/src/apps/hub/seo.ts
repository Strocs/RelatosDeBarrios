import type { SEOConfig } from '../types/seo'

/**
 * SEO and metadata configuration
 * Contains search engine optimization settings and social media metadata
 */
export const seoConfig: SEOConfig = {
  title: 'Relatos de Barrios',
  description:
    'Explora el patrimonio industrial y habitacional de La Serena y Coquimbo.',
  keywords: ['Relatos de Barrios', 'patrimonio', 'La Serena', 'Coquimbo'],
  url: 'https://relatosdebarrios.cl',
  icons: '/favicon.png',
  openGraph: {
    title: 'Relatos de Barrios',
    description:
      'Explora el patrimonio industrial y habitacional de La Serena y Coquimbo.',
    image: '/',
    type: 'website',
  },
  twitter: {
    site: '@relatosdebarrios',
    creator: '@relatosdebarrios',
  },
} as const
