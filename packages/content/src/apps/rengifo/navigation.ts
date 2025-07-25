/**
 * Rengifo Navigation Configuration
 * Menu items and navigation structure for the Rengifo project
 */

import { NavigationContent } from './types/rengifo'

export const navigationContent: NavigationContent = [
  {
    id: 'inicio',
    label: 'Inicio',
    href: '#inicio',
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
] as const
