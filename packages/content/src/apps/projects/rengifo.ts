import type { ProjectConfig } from '../../types/apps'

/**
 * Barrio Rengifo project configuration
 * Contains specific information for the Rengifo neighborhood project
 */
export const rengifoConfig: ProjectConfig = {
  name: '## Conjunto Habitacional **Rengifo**',
  description:
    'Proyecto de investigación y valorización del patrimonio industrial y habitacional del Barrio Rengifo en La Serena.',
  teaser: {
    src: '/images/rengifo-teaser.mp4',
  },
} as const
