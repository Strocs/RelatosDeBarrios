/**
 * Rengifo Project Configuration
 * Main project description, title, and overview content
 */

import { Section } from './types/rengifo'

export const docsContent: Section = {
  title: 'Arquitectura de lo Doméstico',
  description: `
  Recopilación de las planimetrías y documentos físicos originales correspondientes al proyecto “Casas para obreros CCU, La Serena” posteriormente denominado como “Conjunto Habitacional Rengifo”, diseñado en 1957 por el arquitecto Carlos Feuereisen Polanco, y construido en el año 1958 por Negochea y Vergara.

  El proyecto se ubica en el norte de la zona típica de La Serena y es de una tipología característica de la vivienda en la ciudad. Representa el estilo del Plan Serena a pesar de ser posterior (1958) y denota la intención de consolidar la ciudad con edificios de vivienda.`,
  utilityImages: {
    bg: {
      src: '/fondoPersonas.png', // Path in public folder
      width: 1920,
      height: 1900,
      alt: 'Fondo con personas del barrio Rengifo',
    },
    bottom: {
      src: '/fachada.png', // Path in public folder
      width: 3307,
      height: 720,
      alt: 'Fachada de las casas del barrio Rengifo',
    },
  },
  cards: [
    {
      id: 'planimetrias',
      title: 'Planimetrías',
      subTitle: 'originales',
      bgImage: {
        src: '/images/plani.jpg',
        width: 700,
        height: 741,
        alt: 'Planimetría original del proyecto Rengifo',
      },
    },
    {
      id: 'levantamiento',
      title: 'Levantamiento',
      subTitle: 'digital',
      bgImage: {
        src: '/images/levan.jpg',
        width: 600,
        height: 949,
        alt: 'Levantamiento digital del proyecto Rengifo',
      },
    },
  ],

  gallery: {
    planimetries: {
      id: 'planimetrias',
      images: [
        {
          src: '/images/planimetrias/Planos-01.jpg',
          name: 'Plano 01',
          width: 1622,
          height: 1080,
          alt: 'Planimetría original número 1 del proyecto Rengifo',
        },
        {
          src: '/images/planimetrias/Planos-02.jpg',
          name: 'Plano 02',
          width: 1636,
          height: 1080,
          alt: 'Planimetría original número 2 del proyecto Rengifo',
        },
        {
          src: '/images/planimetrias/Planos-03.jpg',
          name: 'Plano 03',
          width: 1653,
          height: 1080,
          alt: 'Planimetría original número 3 del proyecto Rengifo',
        },
        {
          src: '/images/planimetrias/Planos-04.jpg',
          name: 'Plano 04',
          alt: 'Planimetría original número 4 del proyecto Rengifo',
          width: 1543,
          height: 1080,
        },
        {
          src: '/images/planimetrias/Planos-05.jpg',
          name: 'Plano 05',
          alt: 'Planimetría original número 5 del proyecto Rengifo',
          width: 1408,
          height: 1080,
        },
        {
          src: '/images/planimetrias/Doc-06.jpg',
          name: 'Documento 06',
          alt: 'Documento original número 6 del proyecto Rengifo',
          width: 656,
          height: 1080,
        },
        {
          src: '/images/planimetrias/Doc-07.jpg',
          name: 'Documento 07',
          alt: 'Documento original número 7 del proyecto Rengifo',
          width: 1669,
          height: 1080,
        },
        {
          src: '/images/planimetrias/Doc-08.jpg',
          name: 'Documento 08',
          alt: 'Documento original número 8 del proyecto Rengifo',
          width: 1669,
          height: 1080,
        },
      ],
    },

    survey: {
      id: 'levantamiento',
      images: [
        {
          src: '/images/levantamiento/ISO-01.jpg',
          name: 'Isométrica 01',
          alt: 'Levantamiento isométrico número 1 del proyecto Rengifo',
          width: 1529,
          height: 1080,
        },
        {
          src: '/images/levantamiento/ISO-02.jpg',
          name: 'Isométrica 02',
          alt: 'Levantamiento isométrico número 2 del proyecto Rengifo',
          width: 1529,
          height: 1080,
        },
        {
          src: '/images/levantamiento/ISO-03.jpg',
          name: 'Isométrica 03',
          alt: 'Levantamiento isométrico número 3 del proyecto Rengifo',
          width: 1529,
          height: 1080,
        },
        {
          src: '/images/levantamiento/ISO-04.jpg',
          name: 'Isométrica 04',
          alt: 'Levantamiento isométrico número 4 del proyecto Rengifo',
          width: 1529,
          height: 1080,
        },
        {
          src: '/images/levantamiento/ISO-05.jpg',
          name: 'Isométrica 05',
          alt: 'Levantamiento isométrico número 5 del proyecto Rengifo',
          width: 1529,
          height: 1080,
        },
      ],
    },
  },
} as const
