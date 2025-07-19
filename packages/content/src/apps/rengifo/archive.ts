/**
 * Rengifo Project Configuration
 * Main project description, title, and overview content
 */

export const archiveConfig = {
  title: 'Arquitectura de lo Domestico',
  description: `
  Recopilación de las planimetrías y documentos físicos originales correspondientes al proyecto “Casas para obreros CCU, La Serena” posteriormente denominado como “Conjunto Habitacional Rengifo”, diseñado en 1957 por el arquitecto Carlos Feuereisen Polanco, y construido en el año 1958 por Negochea y Vergara.

  El proyecto se ubica en el norte de la zona típica de La Serena y es de una tipología característica de la vivienda en la ciudad. Representa el estilo del Plan Serena a pesar de ser posterior (1958) y denota la intención de consolidar la ciudad con edificios de vivienda.`,
  backgroundImage: {
    src: '/fondoPersonas.png', // Path in public folder
    width: 1920,
    height: 1080,
    alt: 'Fondo con personas del barrio Rengifo',
  },
  cards: [
    {
      title: '**Planimetrías** originales',
      image: {
        src: '/planimetria.png',
        width: 800,
        height: 600,
        alt: 'Planimetría original del proyecto Rengifo',
      },
    },
    {
      title: '**Levantamiento** digital',
      image: {
        src: '/levantamiento.png',
        width: 800,
        height: 600,
        alt: 'Levantamiento digital del proyecto Rengifo',
      },
    },
  ],
} as const
