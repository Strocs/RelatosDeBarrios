import { brandContent } from '@/content/brand'
import { ProjectSection } from '../types/content'

export const projectContent: ProjectSection = {
  id: 'project',
  title: 'Proyecto',
  description: `
Relatos de Barrios es un proyecto que busca aportar al conocimiento y valorización del patrimonio industrial y habitacional de las comunas de La Serena y Coquimbo, reconociendo estos conjuntos como expresiones significativas de procesos históricos, sociales y urbanos del siglo XX. El equipo desarrolla una línea investigativa que combina la sistematización documental, la digitalización de fuentes originales y la recuperación de la memoria oral de sus comunidades, integrando además el análisis del entramado social y cultural que dichos espacios representan.

El proyecto busca consolidarse como un referente académico en la conservación del patrimonio industrial y habitacional desde una perspectiva documental y de valoración crítica. Promueve un enfoque interdisciplinario que articula historia, arquitectura, urbanismo y memoria social, orientado a potenciar la sustentabilidad de las intervenciones patrimoniales, la apropiación social y el reconocimiento de su valor, contribuyendo a la formación de nuevas generaciones de profesionales y ciudadanos comprometidos con la importancia del patrimonio industrial como componente esencial de la identidad regional y nacional.
`,
  cards: {
    covico: {
      id: 'covico',
      title: '## Villa **Covico**',
      href: brandContent.paths.covico,
      bg: {
        src: '/hub/images/placeholder.png',
        alt: 'Placeholder image for Villa Covico',
        width: 300,
        height: 300,
      },
    },
    rengifo: {
      id: 'rengifo',
      title: '## Conjunto Habitacional **Rengifo**',
      href: brandContent.paths.rengifo,
      bg: {
        src: '/hub/videos/rengifo-teaser.mp4',
        autoplay: true,
        loop: true,
        muted: true,
        preload: 'auto',
      },
    },
  },
}
