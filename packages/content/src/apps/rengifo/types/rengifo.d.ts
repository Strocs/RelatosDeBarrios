/**
 * Type definitions for Rengifo content package
 *
 * This file contains all type definitions for the Rengifo project content
 */

import {
  Credits,
  GalleryContent,
  ImageType,
  Section,
  SocialLink,
  VideoType,
} from '../../types/general'

export type RengifoSections = 'hero' | 'docs' | 'photos' | 'resources'
export type Docs = 'planimetries' | 'survey'
export type Photos =
  | 'photos'
  | 'activities'
  | 'aerials'
  | 'exterior'
  | 'interior'
export type Resources = 'book' | 'documentary'

export type DocsContent = Section<RengifoSections, Docs>
export interface PhotoContent extends Section<RengifoSections, Photos> {
  gallery: GalleryContent<Exclude<Photos, 'exterior' | 'interior'>>
}
export type ResourcesContent = Section<RengifoSections, Resources>

export type HeroAction = {
  id: string
  label: string
  href: string
}

export interface HeroContent extends Section<'hero'> {
  subTitle: string
  actions: HeroAction[]
  video: VideoType
}

export interface FooterContent extends Section<'footer'> {
  utilityImages: {
    bg: ImageType
  }
  socialLinks: SocialLink[]
  credits: Credits
}
