# Technologies Used

## Core Framework & Language
*   **Next.js**: React framework for server-side rendering, static site generation, and App Router for routing.
*   **TypeScript**: Superset of JavaScript for static typing.
*   **React**: JavaScript library for building user interfaces.

## Styling
*   **Tailwind CSS v4**: Utility-first CSS framework.
    *   Integrated via `@tailwindcss/postcss` in `postcss.config.mjs`.
*   **`shadcn/ui`**: Collection of reusable UI components built with Radix UI and Tailwind CSS.
    *   Components used: `Button`, `NavigationMenu`, `Sheet`.
    *   Configuration in `components.json`.
    *   Utilities in `src/lib/utils.ts`.
*   **CSS Variables**: Used for theming (colors, fonts, radius) in `src/app/globals.css`, largely driven by `shadcn/ui` setup.

## Fonts
*   **Rubik**: Primary font for the website, configured in `src/app/layout.tsx` using `next/font/google` and applied via CSS variable `--font-rubik` in `src/app/globals.css`.

## State Management & Forms (Installed, for future use)
*   **`react-hook-form`**: For building forms with validation.
*   **`zod`**: Schema declaration and validation library, often used with `react-hook-form`.

## Animations (Installed, for future use)
*   **`framer-motion`**: Animation library for React.

## Development Setup & Tooling
*   **npm**: Package manager.
*   **ESLint**: For linting TypeScript/JavaScript code (config in `eslint.config.mjs`).
*   **PostCSS**: Tool for transforming CSS with JavaScript plugins (config in `postcss.config.mjs`).
*   **Turbopack**: (Used by Next.js `dev` command) Rust-based bundler for fast development builds.

## Key Dependencies (from `package.json`)
*   `next`
*   `react`, `react-dom`
*   `tailwindcss`
*   `@tailwindcss/postcss`
*   `shadcn-ui` (CLI tool, components are local)
*   `class-variance-authority` (dependency of `shadcn/ui`)
*   `clsx` (dependency of `shadcn/ui`)
*   `lucide-react` (icons, dependency of `shadcn/ui`)
*   `tailwind-merge` (dependency of `shadcn/ui`)
*   `tailwindcss-animate` (dependency of `shadcn/ui`)
*   `react-hook-form`
*   `zod`
*   `framer-motion`

## Technical Constraints & Considerations
*   **React 19 Peer Dependencies**: Using `--legacy-peer-deps` flag during `npm install` for some packages due to React 19 compatibility.
*   **Tailwind CSS v4 Integration**: Relies on `@tailwindcss/postcss` and CSS variable setup in `globals.css`.
*   **Build Cache**: Clearing the `.next` directory was necessary to resolve a build issue with `@tailwindcss/postcss`.