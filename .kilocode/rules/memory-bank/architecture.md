# Architecture

## System Architecture
This is a Next.js (App Router) web application. It's designed to be a statically generated site where possible for performance, but will leverage Next.js server components and client components as needed.

## Source Code Paths
*   **`src/app/`**: Contains the main application routing, pages (`page.tsx`), and layout (`layout.tsx`, `globals.css`).
*   **`src/components/`**: Houses reusable UI components.
    *   `src/components/ui/`: Contains components added via `shadcn/ui` (e.g., `button.tsx`, `navigation-menu.tsx`, `sheet.tsx`).
    *   `src/components/Header.tsx`: Site-wide header navigation.
    *   `src/components/Hero.tsx`: Homepage hero section.
    *   `src/components/Footer.tsx`: Site-wide footer.
*   **`src/lib/`**: Utility functions, currently includes `utils.ts` from `shadcn/ui` initialization.
*   **`public/`**: Static assets like images (`empireLogo.svg`, `homeHero.webp`) and fonts if not served via CDN.
*   **`.kilocode/rules/memory-bank/`**: Contains Memory Bank documentation files.

## Key Technical Decisions
*   **Next.js App Router**: Chosen for modern React features, server components, and optimized builds.
*   **Tailwind CSS v4**: For utility-first styling, integrated with PostCSS.
*   **`shadcn/ui`**: For pre-built, accessible, and customizable UI components. This helps accelerate development while maintaining a consistent look and feel. Components are copied into the project (`src/components/ui`) for full control.
*   **TypeScript**: For type safety and improved developer experience.
*   **CSS Variables for Theming**: Font and color theming (especially from `shadcn/ui`) is managed via CSS variables in `src/app/globals.css`.

## Design Patterns in Use
*   **Component-Based Architecture**: Standard React pattern, with UI broken down into reusable components.
*   **Utility-First CSS**: Leveraging Tailwind CSS for styling directly in the JSX.
*   **Responsive Design**: Using Tailwind's responsive prefixes (e.g., `md:`, `sm:`) to adapt the layout for different screen sizes.
*   **CSS Custom Properties (Variables)**: Used extensively for theming (colors, fonts, radius) as set up by `shadcn/ui` and for custom font integration.

## Component Relationships
*   **`src/app/layout.tsx`**: Root layout, applies global styles (including font) and wraps all pages.
*   **`src/app/page.tsx`**: Main homepage, currently imports and renders:
    *   `Header`
    *   `Hero`
    *   `Footer`
*   **`Header`**: Uses `NavigationMenu` (for desktop dropdowns) and `Sheet` (for mobile flyout menu), both from `shadcn/ui`. Also uses the `Button` component.
*   **`Hero`**: Uses the `Button` component.
*   **`Footer`**: Uses the `Button` component.
*   `shadcn/ui` components (like `Button`, `NavigationMenu`, `Sheet`) are self-contained but rely on global styles and utility functions (`src/lib/utils.ts`, `src/app/globals.css`).

## Critical Implementation Paths
*   **Styling and Theming**: Ensuring consistent application of Tailwind CSS and `shadcn/ui` theming (colors, fonts, spacing) is crucial for the desired high-quality look.
*   **Responsiveness**: The `Header` (desktop vs. mobile menu) is a key area. All components need to be tested across various screen sizes.
*   **Component Reusability**: Building components in a modular way will be important as more pages and features are added.
*   **Form Handling**: Future implementation of contact/estimate forms will rely on `react-hook-form` and `zod` for validation.
*   **Build Process**: Ensuring `@tailwindcss/postcss` and other dependencies are correctly resolved by the Next.js/Turbopack build system.