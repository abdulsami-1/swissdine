import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const footerLinks = {
  experience: [
    { href: '/experience', label: 'The Experience' },
    { href: '/menu', label: 'Menu' },
    { href: '/chef', label: 'The Chef' },
  ],
  reserve: [
    { href: '/reservations', label: 'Reservations' },
    { href: '/private-dining', label: 'Private Dining' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* CTA block */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Your Seat Awaits
          </h2>
          <p className="text-ivory/80 max-w-xl mx-auto mb-8">
            Join us for an intimate tasting journey. Limited to 23 seats per service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservations"
              variant="primary"
              size="lg"
              className="bg-gold text-charcoal hover:bg-gold/90"
            >
              Reserve Now
            </Button>
            <Button href="/private-dining" variant="outline" size="lg" className="border-ivory text-ivory hover:bg-ivory hover:text-charcoal">
              Private Dining
            </Button>
            <Link
              href="/contact#gift-voucher"
              className="inline-flex items-center justify-center min-h-[48px] px-6 text-ivory hover:text-gold transition-colors"
            >
              Gift Vouchers
            </Link>
            <Link
              href="/contact#newsletter"
              className="inline-flex items-center justify-center min-h-[48px] px-6 text-ivory hover:text-gold transition-colors"
            >
              Newsletter
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-ivory/20 pt-12">
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 uppercase tracking-wider text-gold">
              Experience
            </h3>
            <ul className="space-y-2">
              {footerLinks.experience.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/80 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 uppercase tracking-wider text-gold">
              Reserve
            </h3>
            <ul className="space-y-2">
              {footerLinks.reserve.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/80 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 uppercase tracking-wider text-gold">
              The Counter Zürich
            </h3>
            <p className="text-ivory/80 text-sm">
              Tuesday – Saturday
              <br />
              Dinner 18:30 & 21:00
            </p>
            <p className="text-ivory/80 text-sm mt-2">
              Closed Sunday & Monday
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ivory/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ivory/60 text-sm">
            © {new Date().getFullYear()} The Counter Zürich. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ivory/60 text-sm hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
