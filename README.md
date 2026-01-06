# Modern Agency Website

A modern, high-conversion company website built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, premium UI design inspired by Avista
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized for performance (Lighthouse-friendly)
- ♿ Accessible (WCAG AA compliant)
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO-ready (metadata, sitemap, robots.txt)
- 🎯 One-page scrolling homepage with anchor navigation
- 📄 Additional pages: Blog, Contact, Privacy Policy

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Font**: Inter (via next/font)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog listing page
│   ├── contact/            # Contact page
│   └── privacy-policy/     # Privacy policy page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Homepage sections
│   └── animations/         # Animation wrappers
├── lib/
│   ├── constants.ts        # Content configuration
│   ├── utils.ts            # Utility functions
│   └── animations.ts       # Framer Motion variants
└── public/                 # Static assets
```

## Configuration

### Company Information

Edit `lib/constants.ts` to customize:
- Company name
- Contact information
- Social media links
- Content copy

### Design System

Colors and styling are configured in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

## Building for Production

```bash
npm run build
npm start
```

## Features Overview

### Homepage Sections

1. **Hero** - Orange accent section with large headline and CTA
2. **About** - Company info, values cards, and team image
3. **Features** - Why choose us with 3 feature cards
4. **Partners** - Logo grid with decorative illustration
5. **Services** - Large service rows with accordion functionality
6. **Projects** - Stats strip and project gallery
7. **Process** - 3-step working process (dark section)
8. **CTA** - "Let's Work Together" call-to-action
9. **Pricing** - 3 pricing tiers with highlighted card
10. **Testimonials** - Client testimonials with star ratings
11. **FAQ** - Accordion with frequently asked questions
12. **Contact** - Contact form with validation

### Additional Pages

- `/blog` - Blog listing (placeholder)
- `/contact` - Full contact page
- `/privacy-policy` - Privacy policy page

## Customization

### Changing Colors

The primary orange color is defined in `tailwind.config.ts`. Update the `primary.orange` value to change the accent color throughout the site.

### Adding Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Update navigation in `lib/constants.ts` if needed

### Modifying Content

All content is centralized in `lib/constants.ts` for easy updates.

## Performance

- Images optimized with `next/image`
- Lazy loading for below-fold content
- Font optimization with `next/font`
- Minimal JavaScript bundle

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Skip to main content link
- WCAG AA color contrast

## SEO

- Complete metadata (title, description, keywords)
- OpenGraph tags
- Twitter card tags
- Sitemap generation
- Robots.txt

## License

This project is private and proprietary.

