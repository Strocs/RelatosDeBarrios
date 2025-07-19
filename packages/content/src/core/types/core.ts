/**
 * Core business domain types
 * Contains types for brand identity, team, and fundamental business entities
 */

export interface BrandConfig {
  readonly title: string;
  readonly description: string;
  readonly contact_email: string;
  readonly url: UrlConfig;
  readonly paths: {
    readonly hub: string;
    readonly covico: string;
    readonly rengifo: string;
  };
  readonly social: SocialConfig;
}

export interface UrlConfig {
  readonly base: string;
  readonly covico: string;
  readonly rengifo: string;
}

export interface SocialConfig {
  readonly instagram: string;
}

export interface TeamMemberConfig {
  readonly order: number;
  readonly name: string;
  readonly degree: string;
  readonly bio: string;
}

export interface TeamConfig {
  readonly teamMembers: readonly TeamMemberConfig[];
  readonly collaborators: readonly string[];
  readonly participants: readonly string[];
}
