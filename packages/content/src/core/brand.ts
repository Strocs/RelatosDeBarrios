import type { BrandConfig } from '../types/core';

/**
 * Brand identity and core business information
 * Contains fundamental brand data, URLs, and contact information
 */
export const brandConfig: BrandConfig = {
  title: "Relatos de Barrios",
  description: "Proyecto dedicado a la investigación, documentación y valorización del patrimonio industrial y habitacional de La Serena y Coquimbo, integrando historia, arquitectura, urbanismo y memoria social para fortalecer la identidad regional y nacional.",
  contact_email: "relatosdebarrios@gmail.cl",
  url: {
    base: "https://relatosdebarrios.cl",
    covico: "https://villacovico.relatosdebarrios.cl/",
    rengifo: "https://barriorengifo.relatosdebarrios.cl/"
  },
  social: {
    instagram: "https://www.instagram.com/relatosdebarrios"
  }
} as const;
