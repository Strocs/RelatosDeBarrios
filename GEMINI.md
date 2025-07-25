# GEMINI.md

This project is a JavaScript/TypeScript monorepo managed with pnpm and TurboRepo. It contains multiple frontend applications and shared packages, structured for scalability and code reuse.

## Structure

- `apps/`: Deployable frontend applications.
  - `covico`, `hub`, `rengifo-next`: Next.js (TypeScript)
  - `rengifo`: Vite + React (JavaScript)
- `packages/`: Shared code and configuration.
  - `configs`: ESLint, Tailwind, and TypeScript shared configs
  - `content`: Shared content/data
  - `utils`: Shared utility functions

## Technologies

- **Monorepo management:** pnpm, TurboRepo
- **Frontend frameworks:** Next.js (TypeScript), Vite + React (JavaScript)
- **Styling:** Tailwind CSS, CSS Modules, Prettier
- **Linting:** ESLint (custom shared configs)
- **Type safety:** TypeScript (most apps and packages)
- **Assets:** Static assets (images, PDFs, videos) per app

## Key Decisions

- **Monorepo:** Enables code sharing and consistent tooling across apps.
- **TypeScript:** Used for type safety in most apps; one app (`rengifo`) is JavaScript.
- **Shared configs:** Centralized ESLint, Tailwind, and TypeScript configs for consistency.
- **Utilities and content:** Shared via packages to avoid duplication.
- **Styling:** Tailwind CSS and CSS Modules for scalable, maintainable styles.

## Rules

- Never add a new dependency unless it's absolutely necessary. If you need to add a new dependecy, first check if exists in root package.json, if not, ask me first before adding it.
- Always use the shared configs from `packages/configs` for ESLint, Tailwind,
- Always use the shared content from `packages/content` for data.
- Always use context7 when you need to read documentation or need to understand how to use a package.
