/**
 * Rengifo Project Complete Configuration
 * Main export file for all Rengifo-related content
 */

import { rengifoNavigationConfig } from './navigation'
import { rengifoHeaderConfig } from './header'
import { rengifoProjectConfig } from './project'
import { rengifoTeamConfig } from './team'
import { rengifoSectionsConfig } from './sections'
import { rengifoFooterConfig } from './footer'
import { rengifoGalleryConfig } from './gallery'
import { rengifoSeoConfig } from './seo'

export { rengifoNavigationConfig } from './navigation'
export { rengifoHeaderConfig } from './header'
export { rengifoProjectConfig } from './project'
export { rengifoTeamConfig, type TeamMember } from './team'
export { rengifoSectionsConfig } from './sections'
export {
  rengifoFooterConfig,
  type SponsorLogo,
  type SocialLink,
} from './footer'
export {
  rengifoGalleryConfig,
  type GalleryImage,
  type GalleryCollection,
} from './gallery'
export { rengifoSeoConfig } from './seo'

// Combined configuration for easy access
export const rengifoContentConfig = {
  navigation: rengifoNavigationConfig,
  header: rengifoHeaderConfig,
  project: rengifoProjectConfig,
  team: rengifoTeamConfig,
  sections: rengifoSectionsConfig,
  footer: rengifoFooterConfig,
  gallery: rengifoGalleryConfig,
  seo: rengifoSeoConfig,
} as const
