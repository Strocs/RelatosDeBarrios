# GitHub Copilot Instructions for Relatos de Barrios

## Architecture Overview

This is a **Turborepo monorepo** managing three distinct web applications for the "Relatos de Barrios" cultural heritage project, using **pnpm** as package manager:

- **`apps/hub`** (Next.js 15, port 3000) - Main landing page with shared content
- **`apps/covico`** (Next.js 15, port 3001) - Villa Covico neighborhood project
- **`apps/rengifo`** (Vite + React, port 3002) - Barrio Rengifo interactive experience

All apps share configuration and utilities from `packages/*` workspace packages using `@relatos/*` scoped imports.

## Development Workflow

### Essential Commands

```bash
# Install all dependencies across monorepo
pnpm install

# Run specific app
turbo run dev --filter=hub|covico|rengifo

# Run all apps simultaneously
pnpm run dev

# Build all projects
turbo run build

# Lint and format
turbo run lint
pnpm run format

# Type checking
pnpm run check-types
```

### Port Assignment Pattern

- Hub: 3000 (main entry point)
- Covico: 3001
- Rengifo: 3002

## Key Architectural Patterns

### 1. Domain-Driven Content Management

All apps consume content from `@relatos/content` with domain-specific imports:

```typescript
import { brandConfig, teamConfig } from '@relatos/content/core'
import {
  projectsConfig,
  covicoConfig,
  rengifoConfig,
} from '@relatos/content/apps'
import { uiConfig } from '@relatos/content/ui'
import { seoConfig } from '@relatos/content/seo'
```

Content is organized by domain: `core/` (brand, team), `apps/` (project configs), `ui/` (text strings), `seo/` (metadata). See `packages/content/src/` structure.

### 2. Component Organization

- **Next.js apps**: Group by feature folders (`components/home/`, `components/equipo/`)
- **Rengifo**: Feature-based section folders (`components/sections/hero/`, `components/sections/navigation/`) and shared UI components (`components/ui/`)

### 3. Styling Architecture

- **Tailwind CSS** shared via `@relatos/config-tailwindcss`
- Use `cn()` utility from `@relatos/utils` for conditional classes (clsx + tailwind-merge)
- Shared base styles in `packages/configs/tailwindcss/shared-styles.css`

### 4. Technology Stack Differences

- **Hub/Covico**: Next.js 15 + App Router, TypeScript, react-markdown
- **Rengifo**: Next.js 15, TypeScript, GSAP animations, Zustand for state management

## Workspace Package System

### `@relatos/content`

Domain-driven content management with typed exports:

```typescript
export { brandConfig, teamConfig } from './core'
export { hubConfig, projectsConfig, covicoConfig, rengifoConfig } from './apps'
export { uiConfig } from './ui'
export { seoConfig } from './seo'
```

### `@relatos/utils`

Common utilities including `cn()` for class merging, date/string/array helpers:

```typescript
// Example: Using the cn() utility for conditional classes
import { cn } from '@relatos/utils'

// In your component
<div className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' ? 'primary-class' : 'secondary-class'
)}>
```

### `@relatos/config-*`

Shared configuration packages:

- `@relatos/config-eslint` - ESLint rules with Prettier integration
- `@relatos/config-tailwindcss` - Tailwind configuration and shared styles
- `@relatos/config-typescript` - TypeScript configuration

## File Naming Conventions

- **Next.js apps**: `PascalCase.tsx` for components, `kebab-case` for routes
- **Rengifo**: `PascalCase.tsx` for components, organized by feature sections
- **Packages**: `kebab-case.ts` for utilities, `PascalCase.tsx` for shared components

## Integration Points

### Cross-App Data Flow

- Team member data flows from `@relatos/content/core` → all apps
- SEO metadata centralized in `@relatos/content/seo` → consumed by Next.js `layout.tsx`
- UI text strings from `@relatos/content/ui` → shared across apps
- URL structure defined in brand config for cross-app navigation

### Media Assets

- **Hub**: `public/images/`, `public/videos/`
- **Rengifo**: `public/` with images, videos, and other static assets

## Development Notes

- **Package versioning**: Uses `catalog:` in package.json for centralized dependency versions
- **Turbo boundaries**: Public tag system prevents dependency violations
- **React 19**: All apps use latest React with modern patterns
- **Build outputs**: Next.js apps output to `.next/`, Vite to `dist/`

When working on this codebase:

1. Always run commands from monorepo root
2. Import shared utilities from `@relatos/*` packages
3. Follow existing component organization patterns per app
4. Use `cn()` for all conditional styling
5. Update `@relatos/content` for cross-app data changes
6. Run type checking with `pnpm run check-types` before committing changes
