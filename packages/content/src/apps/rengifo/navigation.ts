/**
 * Rengifo Navigation Configuration
 * Menu items and navigation structure for the Rengifo project
 */

import { NavigationConfig } from './types/rengifo'

export const navigationConfig: NavigationConfig = {
  menu: [
    {
      id: 'inicio',
      label: 'Inicio',
      href: '#inicio',
    },
    {
      id: 'proyecto',
      label: 'El Proyecto',
      href: '#proyecto',
    },
    {
      id: 'planimetrias',
      label: 'Planimetrías',
      href: '#planimetrias',
    },
    {
      id: 'archivo',
      label: 'Archivo Fotográfico',
      href: '#archivo',
    },
    {
      id: 'libro-documental',
      label: 'Libro / Documental',
      href: '#libro-documental',
    },
  ],
} as const
