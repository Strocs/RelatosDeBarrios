/**
 * Centralized type exports
 * Re-exports all types from domain-specific modules
 */

// Core business types
export type {
  BrandConfig,
  UrlConfig,
  SocialConfig,
  TeamMemberConfig,
  TeamConfig
} from './core';

// App-specific types
export type {
  ProjectConfig,
  ProjectsConfig,
  SectionConfig,
  HubConfig
} from './apps';

// UI types
export type {
  UIButtonsConfig,
  UIFormsConfig,
  UINavigationConfig,
  UIMessagesConfig,
  UIConfig,
  LegacyUIConfig
} from './ui';

// SEO types
export type {
  TwitterConfig,
  OpenGraphConfig,
  SEOConfig
} from './seo';

// Legacy compatibility - will be deprecated
import type { UrlConfig, SocialConfig } from './core';
import type { ProjectsConfig, HubConfig } from './apps';

// Flexible legacy interfaces for backward compatibility
interface LegacyTeamMember {
  readonly order: number;
  readonly name: string;
  readonly degree: string;
  readonly bio: string;
}

interface LegacyTeamConfig {
  readonly teamMembers: readonly LegacyTeamMember[];
  readonly collaborators: readonly string[];
  readonly participants: readonly string[];
}

interface LegacyUIConfig {
  readonly buttons: Record<string, string>;
  readonly forms: Record<string, string>;
  readonly navigation: Record<string, string>;
  readonly messages: Record<string, string>;
}

interface LegacySEOConfig {
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly twitter: {
    readonly card: string;
    readonly site: string;
    readonly creator: string;
  };
  readonly og: {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly url: string;
  };
  readonly favicon: string;
}

export interface AppConfig {
  readonly title: string;
  readonly url: UrlConfig;
  readonly description: string;
  readonly contact_email: string;
  readonly social: SocialConfig;
  readonly team: LegacyTeamConfig;
  readonly projects: ProjectsConfig;
  readonly hub: HubConfig;
  readonly ui: LegacyUIConfig;
  readonly seo: LegacySEOConfig;
}
