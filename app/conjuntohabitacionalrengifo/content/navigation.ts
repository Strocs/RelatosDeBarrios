/**
 * Rengifo Navigation Configuration
 * Menu items and navigation structure for the Rengifo project
 */

import { NavigationContent } from '@/types/general'
import { RengifoSections } from '@/rengifo/types/content'

export const navigationContent: NavigationContent<RengifoSections> = [
  {
    id: 'hero',
    label: 'Inicio',
  },
  {
    id: 'docs',
    label: 'Planimetrías',
  },
  {
    id: 'photos',
    label: 'Archivo Fotográfico',
  },
  {
    id: 'resources',
    label: 'Libro / Documental',
  },
] as const
