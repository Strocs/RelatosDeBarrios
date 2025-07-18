/**
 * Rengifo Team Configuration
 * Team members and collaborators data
 */

export type TeamMember = {
  id: string
  name: string
  role: string
  imagePath: string // Path to image in public folder
}

export const rengifoTeamConfig = {
  teamMembers: [
    {
      id: 'alejandro',
      name: 'Alejandro Orellana McBridge',
      role: 'Director de Proyecto',
      imagePath: '/images/equipo/alejandro.jpg',
    },
    {
      id: 'javier',
      name: 'Javier Fredes González',
      role: 'Contratos y Vinculación con el medio',
      imagePath: '/images/equipo/javier.jpg',
    },
    {
      id: 'camila',
      name: 'Camila Valencia Altamirano',
      role: 'Levantamiento y Digitalización',
      imagePath: '/images/equipo/camila.jpg',
    },
    {
      id: 'carolina',
      name: 'Carolina Novo Boza',
      role: 'Directora Creativa',
      imagePath: '/images/equipo/carolina.jpg',
    },
    {
      id: 'rocio',
      name: 'Rocío Torres Robles',
      role: 'Encargada Difusión',
      imagePath: '/images/equipo/rocio.jpg',
    },
    {
      id: 'ximena',
      name: 'Ximena Araya Munizaga',
      role: 'Directora Audiovisual',
      imagePath: '/images/equipo/ximena.jpg',
    },
    {
      id: 'daniela',
      name: 'Daniela Garmendia Avendaño',
      role: 'Encargada de Finanzas',
      imagePath: '/images/equipo/daniela.jpg',
    },
  ] as TeamMember[],

  collaborators: [
    {
      id: 'vincent',
      name: 'Vincent Gatica Espinoza',
      role: 'Diseño Gráfico',
      imagePath: '/images/equipo/vincent.jpg',
    },
    {
      id: 'ignacio',
      name: 'Ignacio Molina Palominos',
      role: 'Desarrollo Web',
      imagePath: '/images/equipo/ignacio.jpg',
    },
    {
      id: 'raul',
      name: 'Raúl Tello Castillo',
      role: 'Vista3D, recorridos virtuales 360˚',
      imagePath: '/images/equipo/raul.jpg',
    },
    {
      id: 'flabio',
      name: 'Flabio Pastén Valenzuela',
      role: 'Apoyo Levantamiento y Digitalización',
      imagePath: '/images/equipo/flabio.jpg',
    },
    {
      id: 'victor',
      name: 'Victor Soto Castillo',
      role: 'Apoyo Audiovisual',
      imagePath: '/images/equipo/victor.jpg',
    },
  ] as TeamMember[],

  backgroundImages: {
    team: '/images/equipo.jpg',
    collaborators: '/images/colaboradores.jpg',
  },
} as const
