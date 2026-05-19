# The Counter Zürich

A high-performance, SEO-optimized marketing website for **The Counter Zürich** — a 2-Michelin-star, 23-seat private dining counter in the heart of Zürich, Switzerland.

Built with Next.js 14 App Router for maximum conversion, premium brand experience, and search visibility.

---

## Live Preview

> Deploy to Vercel in one click — see [Deployment](#deployment) below.

---

## Features

- **Immersive UI** — full-screen video hero, cinematic transitions, Framer Motion animations
- **Reservation system** — multi-step booking form with validation (React Hook Form + Zod)
- **Private dining inquiries** — dedicated inquiry flow with server-side API route
- **Journal / editorial** — dynamic article pages with slug-based routing
- **SEO-ready** — JSON-LD Restaurant schema, Open Graph metadata, sitemap, robots.txt
- **Performance** — image optimization, font subsetting, edge-ready on Vercel
- **Cookie consent** — GDPR-compliant consent banner
- **Fully responsive** — mobile-first, tested across breakpoints

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/                        # App Router pages
│   ├── page.tsx                # Home
│   ├── layout.tsx              # Root layout (fonts, schema, cookie consent)
│   ├── experience/             # The experience page
│   ├── menu/                   # Tasting menu
│   ├── chef/                   # Chef profile
│   ├── reservations/           # Reservation booking
│   ├── private-dining/         # Private dining inquiry
│   ├── journal/                # Editorial journal + [slug] articles
│   ├── press/                  # Press & accolades
│   ├── contact/                # Contact page
│   ├── privacy/                # Privacy policy
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots directives
│   └── api/                    # Server-side API routes
│       ├── reservations/
│       ├── private-dining/
│       ├── contact/
│       └── newsletter/
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Hero, Philosophy, Triptych, Urgency, Testimonials
│   └── ui/                     # Button, Card, Input, Textarea, Select, Calendar
└── lib/
    └── utils.ts                # Utility helpers (cn, etc.)
```

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/the-counter-zurich.git
cd the-counter-zurich
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Booking engine (SevenRooms or similar)
SEVENROOMS_API_KEY=

# Email (Resend or SendGrid)
RESEND_API_KEY=

# Database (optional — Supabase)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=
```

---

## Integrations

| Service | Purpose | File |
|---|---|---|
| SevenRooms | Reservation engine | `src/app/api/reservations/route.ts` |
| Resend / SendGrid | Email confirmations | `src/app/api/contact/route.ts` |
| Supabase | Inquiry storage + newsletter | `src/app/api/newsletter/route.ts` |
| Sanity.io | Journal CMS | `src/app/journal/` |
| Google Analytics 4 | Traffic analytics | `src/app/layout.tsx` |
| Vercel Analytics | Web vitals | `src/app/layout.tsx` |

---

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard
4. Deploy — automatic deployments on every push to `main`

### Manual

```bash
npm run build
npm start
```

---

## Design System

| Token | Value |
|---|---|
| Primary font | Playfair Display (serif) |
| Secondary font | Inter (sans-serif) |
| Palette | Charcoal, Ivory, Gold, Slate, Olive, Cream |
| Spacing scale | 8px grid (xs / s / m / l / xl) |

---

## License

Private and proprietary. All rights reserved.

---

*The Counter Zürich — Where every seat is the chef's table.*
