/**
 * Rengifo Header Configuration
 * Main header content including hero title and call-to-action buttons
 */

export const headerConfig = {
  hero: {
    title: 'Imaginario Urbano,',
    subTitle: 'Imaginario Barrial',
  },
  actions: [
    {
      id: 'libro',
      label: 'Ver Libro',
      href: '/Libro_RelatosDeBarrios.pdf', // Path in public folder
      type: 'primary' as const,
    },
    {
      id: 'documental',
      label: 'Ver Documental',
      href: 'https://www.youtube.com/embed/6Vg9ZTJFnj4?fs=1',
      type: 'primary' as const,
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
