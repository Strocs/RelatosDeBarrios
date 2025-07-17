# @relatos/content

Professional content management package for the Relatos de Barrios monorepo.

## Architecture Overview

This package provides a well-structured, type-safe content management system organized by domain responsibility:

```
src/
├── core/          # Core business configuration
│   ├── brand.ts   # Brand identity, URLs, contact info
│   ├── team.ts    # Team members, collaborators, participants
│   └── index.ts   # Core exports
├── apps/          # App-specific configurations
│   ├── hub/       # Hub sections configuration
│   ├── projects/  # Project-specific configs (covico, rengifo)
│   └── index.ts   # App exports
├── ui/            # User interface configurations
│   ├── texts.ts   # UI text strings and translations
│   └── index.ts   # UI exports
├── seo/           # SEO and metadata configurations
│   ├── metadata.ts # SEO metadata, Open Graph, Twitter
│   └── index.ts   # SEO exports
├── types/         # Type definitions organized by domain
│   ├── core.ts    # Core business types
│   ├── apps.ts    # App-specific types
│   ├── ui.ts      # UI-related types
│   ├── seo.ts     # SEO-related types
│   └── index.ts   # Type exports
└── index.ts       # Main package entry point
```

│ │ ├── rengifo.ts # Barrio Rengifo specific config
│ │ └── index.ts
│ └── index.ts
├── ui/ # User interface configurations
│ ├── texts.ts # UI text strings and translations
│ └── index.ts
├── seo/ # SEO and metadata configurations
│ ├── metadata.ts # SEO metadata, Open Graph, Twitter
│ └── index.ts
├── types/ # Type definitions organized by domain
│ ├── core.ts # Core business types
│ ├── apps.ts # App-specific types
│ ├── ui.ts # UI-related types
│ ├── seo.ts # SEO-related types
│ └── index.ts # Type exports
└── index.ts # Main package entry point

````

## Usage

### Recommended (Domain-specific imports)

```typescript
import { brandConfig, teamConfig } from '@relatos/content';
import { projectsConfig, covicoConfig, rengifoConfig } from '@relatos/content';
import { hubConfig } from '@relatos/content';
import { uiConfig } from '@relatos/content';
import { seoConfig } from '@relatos/content';

// Access specific data
const title = brandConfig.title;
const covicoProject = projectsConfig.covico;
const submitButton = uiConfig.buttons.submit;
````

## Development

To add new configuration:

1. Determine the appropriate domain (core, apps, ui, seo)
2. Add types to the corresponding types file
3. Create or update the configuration file
4. Export from the domain index file
5. Update the main index exports if needed

## File Structure Benefits

- **`core/`**: Fundamental business data that rarely changes
- **`apps/`**: Application-specific data that varies by app
- **`ui/`**: User-facing text and interface elements
- **`seo/`**: Search and social media optimization data
- **`types/`**: Well-organized type definitions for better IDE support
