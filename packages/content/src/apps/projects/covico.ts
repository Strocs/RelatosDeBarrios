import type { ProjectConfig } from '../../types/apps'

/**
 * Villa Covico project configuration
 * Contains specific information for the Covico neighborhood project
 */
export const covicoConfig: ProjectConfig = {
  name: '## Villa **Covico**',
  description:
    'Proyecto de investigación y valorización del patrimonio industrial y habitacional de la Villa Covico en Coquimbo.',
  teaser: {
    src: '/',
  },
} as const
