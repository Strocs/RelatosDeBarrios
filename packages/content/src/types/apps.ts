/**
 * Application-specific types
 * Contains types for individual apps and their configurations
 */

export interface ProjectConfig {
  readonly name: string
  readonly description: string
  readonly teaser: {
    readonly src: string
    readonly poster?: string
  }
}

export interface ProjectsConfig {
  readonly covico: ProjectConfig
  readonly rengifo: ProjectConfig
}

export interface SectionConfig {
  readonly title: string
  readonly slug: string
  readonly description: string
}

export interface HubConfig {
  readonly sections: Record<string, SectionConfig>
}
