import { NavigationContent } from '../types/general'
import { HubSections } from './types/hub'

export const navigationContent: NavigationContent<HubSections> = [
  {
    id: 'home',
    label: 'Inicio',
  },
  {
    id: 'project',
    label: 'Proyecto',
  },
  {
    id: 'team',
    label: 'Equipo',
  },
  {
    id: 'contact',
    label: 'Contacto',
  },
] as const
