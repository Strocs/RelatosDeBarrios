/**
 * Rengifo Footer Configuration
 * Footer content including logos, social links and credits
 */

export type SponsorLogo = {
  src: string
  alt: string
}

export type SocialLink = {
  id: string
  name: string
  href: string
  icon: string // Lucide icon name
}

export const footerConfig = {
  logos: [
    {
      src: '/images/logos/MINCAP.png',
      alt: 'Ministerio de las Culturas, las Artes y el Patrimonio',
    },
    {
      src: '/images/logos/laSerena.png',
      alt: 'Municipio de La Serena',
    },
    {
      src: '/images/logos/ULS.png',
      alt: 'Universidad de La Serena',
    },
    {
      src: '/images/logos/colArq.png',
      alt: 'Colegio de Arquitectos de Chile',
    },
    {
      src: '/images/logos/CEDAU.png',
      alt: 'CEDAU',
    },
  ] as SponsorLogo[],

  socialLinks: [
    {
      id: 'youtube',
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UChyh4l-EFiNCeIs3K33nz_Q',
      icon: 'Youtube',
    },
    {
      id: 'email',
      name: 'Email',
      href: 'mailto:relatosdebarrio.ls@gmail.com?subject=Consulta Relatos de Barrios',
      icon: 'Mail',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://www.instagram.com/relatosdebarrios/',
      icon: 'Instagram',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      href: 'https://www.facebook.com/Relatos-de-Barrios-101242745453386/',
      icon: 'Facebook',
    },
  ] as SocialLink[],

  credits: {
    text: 'Relatos de Barrios 2022 - Universidad de La Serena',
    developer: {
      text: 'Desarrollado con ♥ por',
      name: '_Strocs',
      href: 'https://github.com/Strocs',
    },
  },

  backgroundImage: {
    src: '/images/muroPiedra.png',
    alt: 'Muro de piedra del barrio Rengifo',
  },
} as const
