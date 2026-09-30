# SS Law Firm - Official Website

This repository contains the source code for the official website of SARAVANAN.N, Advocate, Supreme Court of India. The platform is designed to provide a highly professional, authoritative, and elegant digital presence for the chamber, highlighting practice areas, legal services, and contact information.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Vanilla CSS Modules and CSS Variables (Custom Design System)
- **Deployment**: Vercel

## Architecture & Design System

The application is built on a custom, luxury-oriented design system prioritizing typography, spacing, and a strict color palette:

- **Primary Colors**: Deep Black, Warm Ivory, and Gold
- **Typography**: Playfair Display (Serif) for headings; Inter (Sans-serif) for body copy
- **Animations**: Custom IntersectionObserver-based reveal animations, respecting user reduced-motion preferences.

## Project Structure

- `/app`: Contains all Next.js App Router pages and layouts, including metadata and structured data for SEO.
- `/components`: Reusable UI components (Header, Footer, Reveal, etc.).
- `/public`: Static assets including logos, background sketches, and dynamically generated favicons.
- `/styles`: Global stylesheets defining CSS variables and core layout classes.

## Getting Started

To run this project locally, ensure you have Node.js installed, then execute the following commands:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Contact Integration

The consultation calls-to-action are directly integrated with a pre-filled WhatsApp messaging pipeline for immediate client communication, removing friction from the onboarding process.

## SEO & Accessibility

The website is fully optimized for search engines with dynamic `layout.js` metadata, JSON-LD structured data mapping to standard legal service schemas, `robots.txt`, and `sitemap.xml`. It adheres to modern web accessibility standards, ensuring high contrast ratios, semantic HTML, and proper focus states.

## License

All rights reserved. The design, identity, and branding elements are the exclusive property of the respective legal chamber.
