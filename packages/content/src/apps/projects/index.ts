import type { ProjectsConfig } from '../../types/apps'
import { covicoConfig } from './covico'
import { rengifoConfig } from './rengifo'

/**
 * Combined projects configuration
 * Aggregates all project configurations
 */
export const projectsConfig: ProjectsConfig = {
  covico: covicoConfig,
  rengifo: rengifoConfig,
} as const

// Individual project exports for convenience
export { covicoConfig } from './covico'
export { rengifoConfig } from './rengifo'

// Complete Rengifo content configuration (new comprehensive structure)
export {
  rengifoContentConfig,
  rengifoNavigationConfig,
  rengifoHeaderConfig,
  rengifoProjectConfig,
  rengifoTeamConfig,
  rengifoSectionsConfig,
  rengifoFooterConfig,
  rengifoGalleryConfig,
  rengifoSeoConfig,
} from './rengifo/'
export type {
  TeamMember,
  SponsorLogo,
  SocialLink,
  GalleryImage,
  GalleryCollection,
} from './rengifo/'
