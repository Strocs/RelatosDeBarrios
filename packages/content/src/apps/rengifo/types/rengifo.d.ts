/**
 * Type definitions for Rengifo content package
 *
 * This file contains all type definitions for the Rengifo project content
 */

/**
 * Navigation types
 */
export type NavigationItem = {
  id: string
  label: string
  href: string
}

export type NavigationContent = NavigationItem[]

/**
 * Header/Hero types
 */
export type HeroAction = {
  id: string
  label: string
  href: string
}

export type HeroVideo = {
  src: string
  autoplay: boolean
  loop: boolean
  muted: boolean
  preload: string
}

export type HeroContent = {
  hero: {
    title: string
  }
  actions: HeroAction[]
  video: HeroVideo
  backgroundImage: BackgroundImage
}

/**
 * Footer types
 */
export type SponsorLogo = {
  src: string
  alt: string
}

export type SocialLink = {
  id: string
  name: string
  href: string
  icon: string // Lucide icon name
}

export interface Credits {
  text: string
  developer?: {
    text: string
    name: string
    href: string
  } // Optional link for credits
}

export type FooterContent = {
  logos: SponsorLogo[]
  socialLinks: SocialLink[]
  credits: Credits
  backgroundImage?: BackgroundImage // Optional background image for footer
}

/**
 * Gallery types
 */
export type GalleryImage = {
  src: string // Path to image in public folder
  name?: string
  alt?: string
}

export type GalleryCollection = {
  id: string
  title: string
  images: GalleryImage[]
}

export type GalleryContent = {
  [key: string]: GalleryCollection
}

/**
 * Archive/Project types
 */
export type BackgroundImage = {
  src: string
  width?: number
  height?: number
  alt: string
}

export type ProjectCard = {
  title: string
  subTitle?: string
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
}

export type DocsContent = {
  title: string
  description: string
  utilityImages: {
    [key: string]: BackgroundImage
  }
  cards: ProjectCard[]
  gallery: GalleryContent
}
