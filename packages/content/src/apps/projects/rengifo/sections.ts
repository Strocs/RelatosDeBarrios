/**
 * Rengifo Sections Configuration
 * Content for all main sections of the Rengifo project
 */

export const rengifoSectionsConfig = {
  domestic: {
    id: 'domestico',
    title: 'Espacio Doméstico',
    subtitle: '',
    description: `El espacio doméstico del Conjunto Habitacional Rengifo refleja la vida cotidiana de sus habitantes a través de décadas. Cada vivienda cuenta una historia única de adaptación, crecimiento familiar y transformación del espacio original proyectado.`,

    subsections: {
      planimetries: {
        id: 'planimetrias',
        title: 'Planimetrías',
        subtitle: 'Originales',
        backgroundImage: '/images/plani.jpg',
        description:
          'Documentos técnicos originales que muestran el diseño arquitectónico inicial del conjunto habitacional.',
      },
      survey: {
        id: 'levantamiento',
        title: 'Levantamiento',
        subtitle: 'Digital',
        backgroundImage: '/images/levan.jpg',
        description:
          'Registro digital actual del estado de las viviendas y espacios comunes.',
      },
    },
  },

  imaginario: {
    id: 'imaginario',
    title: 'Imaginario',
    subtitle: 'Colectivo',
    description: `El imaginario colectivo del barrio se construye a través de las memorias compartidas, las fotografías familiares y los relatos de quienes han habitado estos espacios. Un archivo visual que documenta la evolución social y arquitectónica del conjunto.`,

    backgroundImages: {
      main: '/images/fondo1.2.jpg',
      facade: '/images/fachada.png',
    },

    subsections: {
      archive: {
        id: 'archivo',
        title: 'Archivo',
        subtitle: 'Fotográfico',
        backgroundImage: '/images/archivo.jpg',
        description: 'Colección de fotografías históricas del barrio.',
      },
      activities: {
        id: 'actividades',
        title: 'Actividades',
        subtitle: 'Comunitarias',
        backgroundImage: '/images/actividades.jpg',
        description: 'Registro de la vida social y comunitaria del barrio.',
      },
      aerial: {
        id: 'aereas',
        title: 'Vistas',
        subtitle: 'Aéreas',
        backgroundImage: '/images/aereas.jpg',
        description: 'Perspectivas aéreas actuales del conjunto habitacional.',
      },
    },

    virtualTours: {
      exterior: {
        id: 'exterior',
        title: 'Recorrido',
        subtitle: 'Exterior',
        backgroundImage: '/images/exterior.jpg',
        available: false,
        description:
          'Recorrido virtual por los espacios exteriores del conjunto.',
      },
      interior: {
        id: 'interior',
        title: 'Recorrido',
        subtitle: 'Interior',
        backgroundImage: '/images/interior.jpg',
        available: false,
        description: 'Recorrido virtual por el interior de las viviendas tipo.',
      },
    },
  },

  discover: {
    id: 'descubre',
    title: 'Descubre Más',
    subtitle: '',
    description: `Profundiza en la historia y el patrimonio del Conjunto Habitacional Rengifo a través de nuestros recursos especializados.`,

    resources: [
      {
        id: 'libro',
        title: 'Libro Digital',
        subtitle: 'Relatos de Barrios',
        backgroundImage: '/images/ventana1.png',
        href: '/Libro_RelatosDeBarrios.pdf',
        type: 'book' as const,
      },
      {
        id: 'documental',
        title: 'Documental',
        subtitle: 'Audiovisual',
        backgroundImage: '/images/ventana2.png',
        href: 'https://www.youtube.com/embed/6Vg9ZTJFnj4?fs=1',
        type: 'video' as const,
      },
    ],
  },
} as const
