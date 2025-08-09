/**
 * Application-specific types
 * Contains types for individual apps and their configurations
 */

import type { Accept } from 'react-dropzone'
import { TeamContent } from '@/types/core'
import { Section } from '@/types/general'

export type HubSections = 'home' | 'project' | 'team' | 'contact'
export type projectCards = 'rengifo' | 'covico'

export type ProjectSection = Section<HubSections, projectCards>

export interface TeamSection extends Section<HubSections> {
  cards: TeamContent
}

export interface InputType {
  id: string
  type: 'text' | 'email' | 'file' | 'textarea' | 'select'
  label: string
  placeholder: string
  required: boolean
  requiredMessage?: string
  invalidMessage?: string
}

export interface AttachmentsType extends InputType {
  maxSize: number
  accept: Accept
}

export interface SubmitButtonType {
  id: string
  type: 'submit'
  label: string
  success: string
  error: {
    validation: string
    server: string
  }
}

export interface ContributionType extends InputType {
  options: {
    id: projectCards
    label: string
  }[]
}

export type ContactForm = {
  name: InputType
  email: InputType
  commentary: InputType
  contribution: ContributionType
  attachments: AttachmentsType
  submit: SubmitButtonType
}

export interface ContactSection extends Section<HubSections> {
  form: ContactForm
}
