# Project Brief: Empire Asphalt Paving Website

## Project Goal
We are creating a website for an asphalt paving company named Empire Asphalt Paving. They are located in the Lower Mainland BC. The primary goal is to develop a fast, responsive, high-quality looking website to increase lead acquisition.

## Technology Stack & Setup
*   **Framework**: Next.js
*   **Styling**: Tailwind CSS (v4, integrated via `@tailwindcss/postcss`)
*   **UI Components**: shadcn/ui
*   **Language**: TypeScript
*   **Font**: Rubik (configured in `src/app/layout.tsx` and `src/app/globals.css`)

## Dependencies Installed
*   `shadcn/ui`: Initialized, and the following components added:
    *   `Button`
    *   `NavigationMenu`
    *   `Sheet`
*   `react-hook-form`
*   `zod`
*   `framer-motion`
*   `@tailwindcss/postcss` (to resolve build issues)

## Development Progress

### Core Components Created:
1.  **`src/components/Header.tsx`**:
    *   Displays the company logo (`public/empireLogo.svg`) and name/tagline.
    *   Features a desktop navigation bar using `NavigationMenu` for "Services", "Service Areas", and "Industries" with dropdowns. Other links include "Home", "About", "Portfolio", and "Contact".
    *   Includes contact phone number and a "Free Estimate" `Button`.
    *   Provides a mobile-responsive slide-out menu (from right) using `Sheet`, triggered by a hamburger icon, containing all navigation links and the "Free Estimate" button.

2.  **`src/components/Hero.tsx`**:
    *   Uses `public/homeHero.webp` as a full-width background image.
    *   Contains the main headline: "Expert Asphalt Paving Services in the Lower Mainland BC".
    *   Displays a sub-headline: "Professional paving solutions with 30+ years of experience. Quality workmanship, reliable service, and customer satisfaction guaranteed."
    *   Includes a prominent "Get Your Free Paving Estimate" `Button`.
    *   Features three badges: "Licensed & Insured", "30+ Years Experience", "BBB Accredited".

3.  **`src/components/Footer.tsx`**:
    *   Displays the company logo and name.
    *   Includes sections for "Navigation", "Our Services", and "Contact Info" (phone, email, location).
    *   Contains a "Free Estimate" `Button`.
    *   Shows a copyright notice: "© {current_year} Empire Asphalt Paving. All rights reserved. | Licensed & Insured".

### Page Structure:
*   **`src/app/page.tsx`**: Integrates the `Header`, `Hero`, and `Footer` components to form the main landing page.
*   **`src/app/layout.tsx`**: Configured to use the Rubik font.
*   **`src/app/globals.css`**: Updated to apply the Rubik font via CSS variables and includes base Tailwind CSS styles.

### Build Issues Resolved:
*   Encountered an error "Cannot find module '@tailwindcss/postcss'".
*   Resolved by installing `@tailwindcss/postcss` and clearing the `.next` build cache.

## Next Steps (from original tasks.md, if applicable beyond current implementation)
*   Further refinement of UI elements and styling to perfectly match the design.
*   Implementation of actual functionality for forms (e.g., contact form, estimate request) using `react-hook-form` and `zod`.
*   Adding animations or transitions using `Framer Motion` where appropriate to enhance user experience.
*   Creating individual pages for services, service areas, industries, about, portfolio, and contact.