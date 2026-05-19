import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Michelin Star Restaurant Zürich | The Counter',
  description:
    'Experience two Michelin stars at The Counter Zürich. An intimate 23-seat dining counter, seasonal tasting menus, and world-class craftsmanship. Reservations essential.',
  keywords: ['Michelin star restaurant Zürich', '2 Michelin stars Switzerland', 'Michelin dining Zürich'],
  openGraph: {
    title: 'Michelin Star Restaurant Zürich | The Counter',
    description: 'Two Michelin stars. 23 seats. Seasonal tasting journey in Zürich.',
    url: 'https://the-counter.ch/michelin-restaurant-zurich',
  },
};

export default function MichelinRestaurantZurichPage() {
  return (
    <div>
      <section className="relative py-24 md:py-32 bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Michelin Star Restaurant Zürich
          </h1>
          <p className="text-xl text-ivory/90 max-w-2xl mx-auto">
            Two stars. Twenty-three seats. One counter. The Counter brings Michelin-level
            fine dining to Zürich in its most intimate form—a seasonal tasting journey
            where every course is crafted within arm’s reach.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-8">
            Why Michelin Recognizes The Counter
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-6">
            The Michelin Guide awards stars for consistency, technique, and the ability to
            deliver a memorable experience. At The Counter, that experience is built on
            seasonality—ingredients at their peak—and on the unique format: you sit at the
            counter, facing the kitchen. There is no barrier between you and the craft.
          </p>
          <p className="text-slate text-lg leading-relaxed mb-6">
            Our first star came in 2021; our second in 2023. We don’t cook for the guide—we
            cook for the guest—but we are proud that the same standards that matter to you
            matter to Michelin.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            Reservations are essential. With only 23 seats per service, we recommend booking
            several weeks in advance, especially for weekends and special occasions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-charcoal font-medium mb-6">
            Ready for a Michelin-starred evening in Zürich?
          </p>
          <Button href="/reservations" variant="primary" size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
            Reserve Your Seat
          </Button>
          <p className="mt-6 text-sm text-slate">
            <Link href="/experience" className="text-gold hover:underline">Explore the experience</Link>
            {' · '}
            <Link href="/menu" className="text-gold hover:underline">View the tasting menu</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
