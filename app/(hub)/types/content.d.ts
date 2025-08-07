/**
 * Application-specific types
 * Contains types for individual apps and their configurations
 */

import { TeamContent } from '@/types/core'
import { Section } from '@/types/general'

export type HubSections = 'home' | 'project' | 'team' | 'contact'
export type projectCards = 'rengifo' | 'covico'

export type ProjectSection = Section<HubSections, projectCards>

export interface TeamSection extends Section<HubSections> {
  cards: TeamContent
}

export interface ContactSection extends Section<HubSections> {
  form: ''
}
