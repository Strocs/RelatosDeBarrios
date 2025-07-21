/**
 * Rengifo Header Configuration
 * Main header content including hero title and call-to-action buttons
 */

import { HeroConfig } from './types/rengifo'

export const heroConfig: HeroConfig = {
  hero: {
    title: '# Conjunto Habitacional **Rengifo**',
  },
  actions: [
    {
      id: 'libro',
      label: 'Ver Libro',
      href: '/Libro_RelatosDeBarrios.pdf', // Path in public folder
    },
    {
      id: 'documental',
      label: 'Ver Documental',
      href: 'https://www.youtube.com/embed/6Vg9ZTJFnj4?fs=1',
    },
  ],
  video: {
    src: '/videos/teaser.mp4', // Path in public folder
    autoplay: true,
    loop: true,
    muted: true,
    preload: 'auto',
  },
  backgroundImage: {
    src: '/headerCasas.png', // Path in public folder
    alt: 'Casas del Conjunto Habitacional Rengifo',
    width: 1654,
    height: 905,
  },
} as const
