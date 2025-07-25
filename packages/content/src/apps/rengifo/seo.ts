/**
 * Rengifo SEO Configuration
 * SEO metadata and Open Graph information for the Rengifo project
 */


import { brandConfig } from '../../core'
import { SEOConfig } from '../types/seo'

export const seoConfig: SEOConfig = {
  title: 'Relatos de Barrios | Conjunto Habitacional Rengifo',
  description:
    'Relatos de Barrios busca difundir el valor patrimonial e histórico de éste y otros barrios de La Serena ligados al patrimonio industrial, destacando la experiencia social y patrimonial detrás de la vida de sus habitantes.',
  keywords: [
    'patrimonio',
    'la serena',
    'arquitectura',
    'rengifo',
    'conjunto habitacional',
    'barrio',
    'chile',
  ],
  url: 'https://relatosdebarrios.cl/rengifo',
    icons: `${brandConfig.paths.rengifo}/icons/favicon.png`,
  openGraph: {
    title: 'Conjunto Habitacional Rengifo - Relatos de Barrios',
    description:
      'Proyecto de investigación y valorización del patrimonio industrial y habitacional del Barrio Rengifo en La Serena.',
      image: `${brandConfig.paths.rengifo}/images/og-rengifo.jpg`, // Path in public folder
    type: 'website',
  },

  twitter: {
    site: '@relatosdebarrios',
    creator: '@relatosdebarrios',
  },
} as const
