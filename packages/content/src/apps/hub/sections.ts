import type { HubConfig } from '../../types/apps';

/**
 * Hub application configuration
 * Contains navigation sections and hub-specific settings
 */
export const hubConfig: HubConfig = {
  sections: {
    proyecto: {
      title: "Proyecto",
      slug: "proyecto",
      description: "Conoce más sobre Relatos de Barrios"
    },
    equipo: {
      title: "Equipo",
      slug: "equipo",
      description: "Conoce al equipo detrás del proyecto"
    },
    contacto: {
      title: "Contacto",
      slug: "contacto",
      description: "Ponte en contacto con nosotros"
    }
  }
} as const;
