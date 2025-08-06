import { HeroContent } from './types/rengifo'
import { brandContent } from '../../core'
import { formatPath } from '@relatos/utils/format'

export const heroContent: HeroContent = {
  id: 'hero',
  title: 'Conjunto Habitacional',
  subTitle: 'Rengifo',
  utilityImages: {
    bg: {
      src: formatPath(brandContent.paths.rengifo + '/headerCasas.webp'),
      alt: 'Casas del Conjunto Habitacional Rengifo',
      width: 1440,
      height: 653,
    },
  },
  actions: [
    {
      id: 'libro',
      label: 'Ver Libro',
      href: formatPath(
        `${brandContent.paths.rengifo}/Libro_RelatosDeBarrios.pdf`
      ), // Path in public folder
    },
    {
      id: 'documental',
      label: 'Ver Documental',
      href: 'https://www.youtube.com/embed/6Vg9ZTJFnj4?fs=1',
    },
  ],
  video: {
    src: formatPath(brandContent.paths.rengifo + '/videos/teaser.mp4'), // Path in public folder
    autoplay: true,
    loop: true,
    muted: true,
    preload: 'auto',
  },
} as const
