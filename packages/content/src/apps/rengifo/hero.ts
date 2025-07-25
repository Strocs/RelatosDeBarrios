/**
 * Rengifo Header Configuration
 * Main header content including hero title and call-to-action buttons
 */

import { HeroContent } from './types/rengifo'
import { brandConfig } from '../../core'

export const heroContent: HeroContent = {
  title: 'Conjunto Habitacional',
  subTitle: 'Rengifo',
  utilityImages: {
    bg: {
      src: `${brandConfig.paths.rengifo}/headerCasas.webp`, // Path in public folder
      alt: 'Casas del Conjunto Habitacional Rengifo',
      width: 1440,
      height: 653,
    },
  },
  actions: [
    {
      id: 'libro',
      label: 'Ver Libro',
      href: `${brandConfig.paths.rengifo}/Libro_RelatosDeBarrios.pdf`, // Path in public folder
    },
    {
      id: 'documental',
      label: 'Ver Documental',
      href: 'https://www.youtube.com/embed/6Vg9ZTJFnj4?fs=1',
    },
  ],
  video: {
    src: `${brandConfig.paths.rengifo}/videos/teaser.mp4`, // Path in public folder
    autoplay: true,
    loop: true,
    muted: true,
    preload: 'auto',
  },
} as const
