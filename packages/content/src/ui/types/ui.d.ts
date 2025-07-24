/**
 * User Interface domain types
 * Contains types for UI texts, navigation, and user-facing elements
 */

export interface UIButtonsConfig {
  readonly save: string
  readonly cancel: string
  readonly submit: string
  readonly close: string
  readonly back: string
  readonly next: string
  readonly previous: string
  readonly download: string
  readonly share: string
  readonly contact: string
}

export interface UIFormsConfig {
  readonly required: string
  readonly email_invalid: string
  readonly phone_invalid: string
  readonly name_placeholder: string
  readonly email_placeholder: string
  readonly phone_placeholder: string
  readonly message_placeholder: string
  readonly submit_success: string
  readonly submit_error: string
}

export interface UINavigationConfig {
  readonly home: string
  readonly about: string
  readonly projects: string
  readonly team: string
  readonly contact: string
  readonly menu: string
}

export interface UIMessagesConfig {
  [key: string]: string
}

export interface UIConfig {
  readonly buttons: UIButtonsConfig
  readonly forms: UIFormsConfig
  readonly navigation: UINavigationConfig
  readonly messages: UIMessagesConfig
}

// Legacy compatibility interface
export interface LegacyUIConfig {
  readonly buttons: Record<string, string>
  readonly forms: Record<string, string>
  readonly navigation: Record<string, string>
  readonly messages: Record<string, string>
}
