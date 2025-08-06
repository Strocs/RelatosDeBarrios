import { Section } from '../types/general'
import { HubSections } from './types/hub'

/**
 * Hub application configuration
 * Contains navigation sections and hub-specific settings
 */

export const heroContent: Section<HubSections> = {
  id: 'home',
  title: 'Relatos de Barrios | Villa Covico',
  description:
    'Voces que construyen identidad en los barrios de la Región de Coquimbo.',
  utilityImages: {
    logo: {
      src: '/images/hero-image.webp',
      alt: 'Logo de Relatos de Barrios',
      width: 1200,
      height: 531,
    },
  },
} as const
