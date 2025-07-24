/**
 * Type definitions for Rengifo content package
 *
 * This file contains all type definitions for the Rengifo project content
 */

/**
 * Common types
 */
export interface Image {
  src: string
  width: number
  height: number
  alt: string
}

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

export interface HeroContent extends Section {
  subTitle: string
  actions: HeroAction[]
  video: HeroVideo
}

export interface GalleryImage extends Image {
  name?: string
}

export type GalleryCollection = {
  id: string
  images: GalleryImage[]
}

export type GalleryContent = {
  [key: string]: GalleryCollection
}

/**
 * Footer types
 */
export type SocialLink = {
  id: string
  name: string
  href: string
  icon: string
}

export type Credits = {
  collaborators: Image[]
  developer?: {
    text: string
    href: string
  }
}

export interface FooterContent extends Section {
  utilityImages: {
    bg: Image
  }
  socialLinks: SocialLink[]
  credits: Credits
}

/**
 * Archive/Project types
 */
export type Card = {
  id: string
  title: string
  subTitle?: string
  bgImage: Image
  disabled?: boolean
}

export type Section = {
  title: string
  subTitle?: string
  description?: string
  utilityImages?: {
    [key: string]: Image
  }
  cards?: Card[]
  gallery?: GalleryContent
}
