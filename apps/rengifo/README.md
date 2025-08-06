# Rengifo Web Application

> This app is part of the Relatos de Barrios monorepo. Rengifo is a Next.js web application focused on the Barrio Rengifo project.

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
turbo run dev --filter=rengifo
```

Or directly:

```bash
cd apps/rengifo
bun run dev
```

## Scripts

- `dev`: Start Next.js development server on port 3002
- `build`: Build the app for production
- `start`: Start the production server on port 3002
- `lint`: Run ESLint

## Dependencies

- @relatos/content (shared content management)
- @relatos/utils (shared utilities)
- Next.js, React, React DOM, React Markdown, Lucide React, Zustand, GSAP

## Status

This project is complete and actively maintained.

---

## Architecture & Features

### Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS (via shared config), custom theme variables
- **State Management:** Custom stores (galleryStore, navigationMenuStore)
- **Shared Packages:** Uses `@relatos/content` and `@relatos/utils`

### Project Structure

```
apps/rengifo/
├── app/
│   ├── layout.tsx         # Root layout for Next.js app
│   └── page.tsx           # Main page
├── public/                # Static assets (images, PDF)
│   ├── Libro_RelatosDeBarrios.pdf
│   ├── fachada.webp
│   ├── fondo1.2.webp
│   ├── fondoPersonas.webp
│   ├── headerCasas.webp
│   └── muroPiedra.webp
├── store/                 # State management
│   ├── galleryStore.ts
│   └── navigationMenuStore.ts
├── styles/
│   └── globals.css        # Global styles and theme variables
├── utils/
│   └── galleryUtils.ts    # Gallery-related utility functions
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── README.md
```

### Key Features

- **Gallery:** Gallery feature managed by custom store and utilities.
- **Navigation:** Custom navigation menu managed by store.
- **Static Assets:** Uses images and PDF for content and presentation.
- **Layout:** Custom layout and page components for Next.js.
- **Styling:** Custom theme colors and fonts via CSS variables and TailwindCSS.
- **Integration:** Uses shared content and utility packages for business logic and helpers.

### How to Extend

- Add new pages in `app/`.
- Add new state stores in `store/`.
- Add new utilities in `utils/`.
- Add new assets in `public/`.
- Update theme in `styles/globals.css`.
