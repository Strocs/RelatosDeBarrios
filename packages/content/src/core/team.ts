import type { TeamConfig } from './types/core'

/**
 * Team and human resources configuration
 * Contains team members, collaborators, and project participants
 */
export const teamConfig: TeamConfig = {
  teamMembers: [
    {
      order: 1,
      name: 'Alejandro Orellana McBride',
      degree: 'Arquitecto, Doctor en Arquitectura y Urbanismo por la UBB',
      bio: 'Director del Departamento de Arquitectura de la Universidad de La Serena. Destaca en las áreas de investigación y docencia, además de múltiples iniciativas de vinculación con el medio.',
    },
    {
      order: 2,
      name: 'Carolina Novo Boza',
      degree:
        'Arquitecta, Máster en Estudios Avanzados de la Arquitectura y estudiante del Doctorado en Proyectos Arquitectónicos por la ETSAB-UPC',
      bio: 'Sus intereses abarcan el ámbito de la estética, la investigación y la difusión de la disciplina. Académica del Departamento de Arquitectura de la Universidad de La Serena y cofundadora del proyecto "Relatos de Barrios".',
    },
    {
      order: 3,
      name: 'Camila Valencia Altamirano',
      degree: 'Arquitecta, Diplomada en Patrimonio Cultural UAH (2022)',
      bio: 'Ha impulsado iniciativas de difusión arquitectónica, como la dirección de concursos nacionales de estudiantes (2015, 2016 y 2018) además de la coordinación territorial y nacional de la XIX y XXI Bienal de Arquitectura y Urbanismo de Chile (2015, 2019). Es cofundadora del proyecto "Relatos de Barrios" desarrollado en conjunto al Departamento de Arquitectura de la Universidad de La Serena.',
    },
    {
      order: 4,
      name: 'Javier Fredes González',
      degree: 'Arquitecto de profesión y Gestor Cultural',
      bio: 'En la búsqueda de promover la labor de la gestión cultural en la región de Coquimbo desde la docencia y gestión de iniciativas. Director de la Asociación Cultural Frijol Mágico. Académico del Departamento de Arquitectura de la Universidad de La Serena.',
    },
  ],
  collaborators: [
    'Séptimo Rastro',
    'Vista 3D',
    'De la photo',
    'Departamento de Arquitectura de la Universidad de La Serena',
  ],
  participants: [
    'Rodán Castro',
    'Constanza Valencia',
    'Verónica Molina',
    'Ximena Araya',
    'Víctor Soto',
    'Vincent Gatica',
    'Flabio Pastén',
    'Ignacio Molina',
    'Rocío Torres',
    'Daniela Garmendia',
  ],
} as const
