/**
 * App-specific configuration exports
 * Provides access to all application configurations
 */

export { hubConfig } from './hub'
export { projectsConfig, covicoConfig, rengifoConfig } from './projects'

// New comprehensive Rengifo content structure
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
} from './projects'
export type {
  TeamMember,
  SponsorLogo,
  SocialLink,
  GalleryImage,
  GalleryCollection,
} from './projects'
