/**
 * Rengifo SEO Configuration
 * SEO metadata and Open Graph information for the Rengifo project
 */

export const rengifoSeoConfig = {
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

  openGraph: {
    title: 'Conjunto Habitacional Rengifo - Relatos de Barrios',
    description:
      'Proyecto de investigación y valorización del patrimonio industrial y habitacional del Barrio Rengifo en La Serena.',
    image: '/images/og-rengifo.jpg', // Path in public folder
    url: '/rengifo',
    type: 'website',
    siteName: 'Relatos de Barrios',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Conjunto Habitacional Rengifo - Relatos de Barrios',
    description:
      'Descubre la historia y patrimonio del Barrio Rengifo en La Serena',
    image: '/images/og-rengifo.jpg',
  },

  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Conjunto Habitacional Rengifo',
    description:
      'Proyecto de investigación y valorización del patrimonio industrial y habitacional del Barrio Rengifo en La Serena.',
    about: {
      '@type': 'Place',
      name: 'Conjunto Habitacional Rengifo',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'La Serena',
        addressCountry: 'Chile',
      },
    },
    creator: {
      '@type': 'Organization',
      name: 'Universidad de La Serena',
      url: 'https://www.userena.cl',
    },
  },

  favicon: '/favicon.png',
  manifest: '/manifest.json',
} as const
