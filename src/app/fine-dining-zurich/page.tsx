import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Fine Dining Zürich | The Counter',
  description:
    'Fine dining in Zürich at its most intimate. The Counter: 23 seats, seasonal tasting menus, two Michelin stars. Reserve your place for an unforgettable evening.',
  keywords: ['fine dining Zürich', 'luxury restaurant Zürich', 'best fine dining Switzerland'],
  openGraph: {
    title: 'Fine Dining Zürich | The Counter',
    description: 'Intimate fine dining. Two Michelin stars. 23 seats.',
    url: 'https://the-counter.ch/fine-dining-zurich',
  },
};

export default function FineDiningZurichPage() {
  return (
    <div>
      <section className="relative py-24 md:py-32 bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Fine Dining Zürich
          </h1>
          <p className="text-xl text-ivory/90 max-w-2xl mx-auto">
            Fine dining in Zürich reaches its purest form at The Counter: hyper-seasonal
            ingredients, precision technique, and an intimacy that only 23 seats can
            create. No theatre for the sake of theatre—just craft, warmth, and a tasting
            journey that stays with you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-8">
            What Fine Dining Means at The Counter
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-6">
            We believe fine dining is defined by intention: every ingredient chosen with
            care, every technique applied with respect, every course paced so you can
            taste fully. Our menu changes with the seasons—sometimes weekly. What you
            experience tonight will never be replicated exactly.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            The setting is equally deliberate. One counter. No distance between you and
            the kitchen. Dress code is smart casual; jackets appreciated but not
            required. The evening lasts approximately 2.5 hours. We recommend booking
            3–4 weeks in advance for weekends.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Button href="/reservations" variant="primary" size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
            Reserve Your Experience
          </Button>
          <p className="mt-6 text-sm text-slate">
            <Link href="/menu" className="text-gold hover:underline">Tasting menu</Link>
            {' · '}
            <Link href="/chef" className="text-gold hover:underline">The chef</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
