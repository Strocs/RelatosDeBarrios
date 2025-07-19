/**
 * SEO and metadata domain types
 * Contains types for search engine optimization and social media metadata
 */

export interface TwitterConfig {
  readonly card: string;
  readonly site: string;
  readonly creator: string;
}

export interface OpenGraphConfig {
  readonly title: string;
  readonly description: string;
  readonly type: string;
  readonly images: {
    url: string;
  }[];
};


export interface SEOConfig {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly keywords: readonly string[];
  readonly twitter: TwitterConfig;
  readonly og: OpenGraphConfig;
  readonly favicon: string;
}
