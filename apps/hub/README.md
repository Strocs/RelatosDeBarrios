# Hub Web Application

> This app is part of the Relatos de Barrios monorepo. Hub is a Next.js web application for the Relatos de Barrios project.

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
turbo run dev --filter=hub
```

Or directly:

```bash
cd apps/hub
bun run dev
```

## Scripts

- `dev`: Start Next.js development server on port 3000
- `build`: Build the app for production
- `start`: Start the production server on port 3000
- `lint`: Run ESLint

## Dependencies

- @relatos/content (shared content management)
- @relatos/utils (shared utilities)
- Next.js, React, React DOM, React Markdown, Lucide React

## Status

This project is under active development.

---

## Architecture & Features

### Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS (via shared config), custom theme variables
- **Shared Packages:** Uses `@relatos/content` for business/config data and `@relatos/utils` for utility functions

### Project Structure

```
apps/hub/
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── (home)/page.tsx # Home page
│   │   ├── contacto/page.tsx
│   │   ├── equipo/page.tsx
│   │   ├── proyecto/page.tsx
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable UI components
│   │   ├── Background.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Main.tsx
│   │   ├── NavBar.tsx
│   │   └── home/           # Home-specific components
│   │       ├── BarrioCard.tsx
│   │       ├── Hero.tsx
│   │       └── ProjectNavigator.tsx
│   ├── styles/
│   │   └── globals.css     # Global styles and theme variables
│   └── middleware.ts       # Next.js middleware
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── vercel.json
└── README.md
```

### Key Features

- **Navigation:** Dynamic navigation bar built from `@relatos/content/hub` config.
- **Layout:** Uses a custom RootLayout with global background, font, and footer.
- **Pages:** Home, Contacto, Equipo, Proyecto—each with its own route and layout.
- **Components:** Modular, reusable components for header, main content, navigation, background, and footer.
- **Styling:** Custom theme colors and fonts via CSS variables and TailwindCSS.
- **SEO:** Metadata and Open Graph tags from shared content config.
- **Social Links:** Footer includes Instagram and email links from shared brand config.

### How to Extend

- Add new sections by updating `@relatos/content/hub` and creating new page files.
- Add new components in `src/components/`.
- Update theme in `src/styles/globals.css`.
