# Venuze

Venuze is a modern venue marketplace landing page built with Next.js. The project focuses on helping users discover premium event spaces, compare venue options, and connect with trusted event vendors for weddings, parties, corporate gatherings, and other occasions.

This app presents a polished, conversion-focused experience with a strong hero section, venue cards, destination discovery, testimonials, and a call-to-action for venue listing.

## Overview

Venuze is designed as a marketing and discovery experience for an event venue platform. The homepage includes:

- A full-width hero section with a rotating background carousel
- Venue discovery cards with ratings, pricing, capacity, and listing details
- A destination explorer for popular cities and regions
- Vendor and venue listing callouts
- Testimonial and social proof sections
- A responsive mobile-friendly navigation and footer

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons
- Framer Motion for animations
- Swiper for carousel interactions

## Project Structure

```bash
src/
  app/
    globals.css
    layout.tsx
    metadata.ts
    page.tsx
  features/
    home/
      HomePage.tsx
      components/
        DiscoverDestinations.tsx
        FeaturedVenues.tsx
        Footer.tsx
        Hero.tsx
        MobileNavbar.tsx
        PathToVenue.tsx
        Testimonials.tsx
        TrustedCreators.tsx
        VenueCard.tsx
public/
  images/
  svgs/
```

## Key Features

### Landing page experience
The homepage is built as a rich event-booking marketing funnel, with sections designed to help users quickly browse venue types and discover spaces in major destinations.

### Responsive design
The interface is designed to adapt across desktop and mobile screens while maintaining a premium visual style and high readability.

### Venue discovery UI
The venue card component showcases price, area, capacity, parking, image galleries, and saved/share interactions, creating a marketplace-style browsing flow.

### Conversion-focused marketing sections
The app includes CTA blocks encouraging venue owners and vendors to list their spaces and services, which is a common pattern for marketplace platforms.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Available Scripts

```bash
npm run dev     # starts the Next.js development server
npm run build   # builds the app for production
npm run start   # serves the production build
npm run lint    # runs ESLint
```

## Notes

This project is currently a frontend homepage and interactive landing page for a venue marketplace. Several links and CTAs are present as UI placeholders and are ready to be connected to real pages, APIs, or backend flows as the product grows.

## License

This project does not currently include a specific license file. If you are planning to share or deploy it publicly, add a license that matches your project goals.
