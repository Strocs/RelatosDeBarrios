export type * from './types'

export { brandConfig, teamConfig } from './core'
export { hubConfig, projectsConfig, covicoConfig, rengifoConfig } from './apps'
export { uiConfig } from './ui'
export { seoConfig } from './seo'

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
} from './apps'
export type {
  TeamMember,
  SponsorLogo,
  SocialLink,
  GalleryImage,
  GalleryCollection,
} from './apps'
