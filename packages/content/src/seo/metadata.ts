import type { SEOConfig } from '../types/seo';

/**
 * SEO and metadata configuration
 * Contains search engine optimization settings and social media metadata
 */
export const seoConfig: SEOConfig = {
  title: "Relatos de Barrios",
  description: "Explora el patrimonio industrial y habitacional de La Serena y Coquimbo.",
  url: "https://relatosdebarrios.cl",
  keywords: ["Relatos de Barrios", "patrimonio", "La Serena", "Coquimbo"],
  twitter: {
    card: "summary_large_image",
    site: "@relatosdebarrios",
    creator: "@relatosdebarrios"
  },
  og: {
    type: "website",
    title: "Relatos de Barrios",
    description: "Explora el patrimonio industrial y habitacional de La Serena y Coquimbo.",
    images: [{ url: '/' }]
  },
  favicon: "/images/favicon.ico"
} as const;
