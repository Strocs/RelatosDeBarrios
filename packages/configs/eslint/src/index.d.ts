/**
 * @file Type definitions for @relatos/config-eslint
 */

import type { Linter } from 'eslint'

declare module '@relatos/config-eslint/next' {
  /**
   * ESLint configuration for Next.js projects
   */
  export const nextJsConfig: Linter.Config[]
}

declare module '@relatos/config-eslint/react' {
  /**
   * ESLint configuration for React projects
   */
  export const reactConfig: Linter.Config[]
}

declare module '@relatos/config-eslint' {
  /**
   * Base ESLint configuration
   */
  export const baseConfig: Linter.Config[]
}
