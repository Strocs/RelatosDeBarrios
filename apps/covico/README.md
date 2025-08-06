# Covico Web Application

> This app is part of the Relatos de Barrios monorepo. Covico is a Next.js web application currently under development.

## Prerequisites

- Node.js v18 or newer
- Bun v1.0 or newer

## Installation

From the monorepo root:

```bash
bun install
```

## Running the Development Server

From the monorepo root:

```bash
turbo run dev --filter=covico
```

Or directly:

```bash
cd apps/covico
bun run dev
```

## Scripts

- `dev`: Start Next.js development server on port 3001
- `build`: Build the app for production
- `start`: Start the production server on port 3001
- `lint`: Run ESLint

## Dependencies

- @relatos/content (shared content management)
- @relatos/utils (shared utilities)
- Next.js, React, React DOM, React Markdown, Lucide React

## Status

This project is incomplete and under active development.
