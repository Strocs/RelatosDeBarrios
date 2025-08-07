import { Section } from '@/types/general'
import { HubSections } from '../types/content'

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
      src: '/hub/images/hero-blue.png',
      alt: 'Logo de Relatos de Barrios',
      width: 772,
      height: 325,
    },
  },
} as const
