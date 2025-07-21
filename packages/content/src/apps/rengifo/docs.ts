/**
 * Rengifo Project Configuration
 * Main project description, title, and overview content
 */

import { DocsContent } from './types/rengifo'

export const docsContent: DocsContent = {
  title: '## **Arquitectura de lo Doméstico**',
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
      title: 'Planimetrías',
      subTitle: 'originales',
      image: {
        src: '/images/plani.jpg',
        width: 800,
        height: 600,
        alt: 'Planimetría original del proyecto Rengifo',
      },
    },
    {
      title: 'Levantamiento',
      subTitle: 'digital',
      image: {
        src: '/images/levan.jpg',
        width: 800,
        height: 600,
        alt: 'Levantamiento digital del proyecto Rengifo',
      },
    },
  ],
  gallery: {
    planimetries: {
      id: 'planimetrias',
      title: 'Planimetrías Originales',
      images: [
        { src: '/images/planimetrias/Planos-01.jpg', name: 'Plano 01' },
        { src: '/images/planimetrias/Planos-02.jpg', name: 'Plano 02' },
        { src: '/images/planimetrias/Planos-03.jpg', name: 'Plano 03' },
        { src: '/images/planimetrias/Planos-04.jpg', name: 'Plano 04' },
        { src: '/images/planimetrias/Planos-05.jpg', name: 'Plano 05' },
        { src: '/images/planimetrias/Doc-06.jpg', name: 'Documento 06' },
        { src: '/images/planimetrias/Doc-07.jpg', name: 'Documento 07' },
        { src: '/images/planimetrias/Doc-08.jpg', name: 'Documento 08' },
      ],
    },
    survey: {
      id: 'levantamiento',
      title: 'Levantamiento Digital',
      images: [
        { src: '/images/levantamiento/ISO-01.jpg', name: 'Isométrica 01' },
        { src: '/images/levantamiento/ISO-02.jpg', name: 'Isométrica 02' },
        { src: '/images/levantamiento/ISO-03.jpg', name: 'Isométrica 03' },
        { src: '/images/levantamiento/ISO-04.jpg', name: 'Isométrica 04' },
        { src: '/images/levantamiento/ISO-05.jpg', name: 'Isométrica 05' },
      ],
    },
  },
} as const
