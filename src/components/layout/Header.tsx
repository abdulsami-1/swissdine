'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/menu', label: 'Menu' },
  { href: '/chef', label: 'The Chef' },
  { href: '/journal', label: 'Journal' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-sm border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="The Counter Zürich - Home"
          >
            <span className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-charcoal/10 bg-charcoal">
              <Image
                src="/logo-counter.svg"
                alt="The Counter Zürich logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </span>
            <span className="font-serif text-xl md:text-2xl font-semibold text-charcoal group-hover:text-gold transition-colors">
              The Counter
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold',
                  pathname === link.href ? 'text-gold' : 'text-charcoal'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button href="/reservations" variant="primary" size="sm">
              Reserve
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-ivory border-t border-charcoal/5 overflow-hidden"
          >
            <nav className="px-4 py-6 flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'text-base font-medium py-2 border-b border-charcoal/5',
                    pathname === link.href ? 'text-gold' : 'text-charcoal'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/reservations"
                variant="primary"
                size="md"
                className="mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Reserve Your Seat
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
