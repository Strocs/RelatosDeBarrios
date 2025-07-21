/**
 * SEO and metadata domain types
 * Contains types for search engine optimization and social media metadata
 */

export interface TwitterConfig {
  readonly card?: string
  readonly site: string
  readonly creator: string
}

export interface ImageConfig {
  readonly url: string
  readonly width?: number
  readonly height?: number
  readonly alt?: string
  readonly type?: string
}

export interface OpenGraphConfig {
  readonly title: string
  readonly description: string
  readonly type?: string
  readonly url?: string
  readonly siteName?: string
  readonly locale?: string
  readonly image: ImageConfig | string // Can be a URL or an object
}

export interface IconsConfig {
  readonly icon: string // Path to icon in public folder
  readonly appleTouchIcon?: string // Optional Apple touch icon
  readonly maskIcon?: string // Optional mask icon for dark mode
  readonly favicon?: string // Optional favicon
}

export interface SEOConfig {
  readonly title: string
  readonly description: string
  readonly url: string
  readonly icons: IconsConfig | string
  readonly keywords: string[]
  readonly twitter: TwitterConfig
  readonly openGraph: OpenGraphConfig
}
