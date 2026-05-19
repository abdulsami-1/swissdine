import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RestaurantSchema } from '@/components/RestaurantSchema';
import { CookieConsent } from '@/components/CookieConsent';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Counter Zürich | 2 Michelin Star Fine Dining',
    template: '%s | The Counter Zürich',
  },
  description:
    '23-seat intimate dining counter in Zürich. Experience seasonal tasting menus crafted by our chef. Two Michelin stars. Reservations essential.',
  keywords: [
    'Michelin restaurant Zürich',
    'fine dining Zürich',
    "chef's table",
    'tasting menu',
    '2 Michelin star Switzerland',
  ],
  openGraph: {
    title: 'The Counter Zürich | 2 Michelin Star Fine Dining',
    description:
      '23-seat intimate dining counter in Zürich. Seasonal tasting menus. Two Michelin stars. Reservations essential.',
    url: 'https://the-counter.ch',
    siteName: 'The Counter Zürich',
    locale: 'en_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Counter Zürich | 2 Michelin Star Fine Dining',
    description: '23-seat intimate dining. Two Michelin stars. Zürich.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo-counter.svg',
    shortcut: '/logo-counter.svg',
    apple: '/logo-counter.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <RestaurantSchema />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
