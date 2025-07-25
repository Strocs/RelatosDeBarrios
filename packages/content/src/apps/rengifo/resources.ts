import { Section } from './types/rengifo'

export const resourcesContent: Section = {
  title: 'Descubre',
  subTitle: 'Relatos de Barrios',
  cards: [
    {
      id: 'libro',
      title: 'Libro',
      subTitle: 'Descárgalo Aquí',
      bgImage: {
        src: '/images/ventana1.png',
        width: 300,
        height: 300,
        alt: 'Portada del libro documental Rengifo',
      },
    },
    {
      id: 'documental',
      title: 'Documental',
      subTitle: 'Míralo Aquí',
      bgImage: {
        src: '/images/ventana2.png',
        width: 300,
        height: 300,
        alt: 'Portada del libro documental Rengifo 2',
      },
    },
  ],
}
