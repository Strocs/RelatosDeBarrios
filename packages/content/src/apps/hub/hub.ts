import type { HubConfig } from './types/hub'

/**
 * Hub application configuration
 * Contains navigation sections and hub-specific settings
 */
export const hubConfig: HubConfig = {
  description:
    'Voces que construyen identidad en los barrios de la Región de Coquimbo.',
  hero_img: {
    src: '/images/hero-image.webp',
    alt: 'Logo de Relatos de Barrios',
    width: 1200,
    height: 531,
  },
  sections: {
    // inicio: {
    //   title: 'Inicio',
    //   slug: '/',
    //   description: 'Bienvenido a Relatos de Barrios',
    // },
    // proyecto: {
    //   title: 'Proyecto',
    //   slug: '/proyecto',
    //   description: 'Conoce más sobre Relatos de Barrios',
    // },
    // equipo: {
    //   title: 'Equipo',
    //   slug: '/equipo',
    //   description: 'Conoce al equipo detrás del proyecto',
    // },
    // contacto: {
    //   title: 'Contacto',
    //   slug: '/contacto',
    //   description: 'Ponte en contacto con nosotros',
    // },
  },
  projects: {
    covico: {
      name: '## Villa **Covico**',
      description:
        'Proyecto de investigación y valorización del patrimonio industrial y habitacional de la Villa Covico en Coquimbo.',
      teaser: {
        src: '/',
      },
    },
    rengifo: {
      name: '## Conjunto Habitacional **Rengifo**',
      description:
        'Proyecto de investigación y valorización del patrimonio industrial y habitacional del Barrio Rengifo en La Serena.',
      teaser: {
        src: '/images/rengifo-teaser.mp4',
      },
    },
  },
} as const
