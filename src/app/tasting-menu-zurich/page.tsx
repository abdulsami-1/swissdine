import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Tasting Menu Zürich | The Counter',
  description:
    'Seasonal tasting menu in Zürich. 5–7 courses, wine pairing, 2.5 hours at the counter. The Counter’s menu changes with the seasons—book your tasting journey.',
  keywords: ['tasting menu Zürich', 'seasonal tasting menu Switzerland', 'fine dining tasting menu Zürich'],
  openGraph: {
    title: 'Tasting Menu Zürich | The Counter',
    description: 'Seasonal tasting menu. 5–7 courses. Wine pairing available.',
    url: 'https://the-counter.ch/tasting-menu-zurich',
  },
};

export default function TastingMenuZurichPage() {
  return (
    <div>
      <section className="relative py-24 md:py-32 bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Tasting Menu Zürich
          </h1>
          <p className="text-xl text-ivory/90 max-w-2xl mx-auto">
            Our tasting menu is a narrative told through flavour, texture, and time. Expect
            5–7 courses, each paired thoughtfully. Duration: approximately 2.5 hours. The
            menu changes with the seasons—what you experience tonight is unique to this
            moment.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-8">
            A Menu That Speaks to the Season
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-6">
            We don’t publish a fixed menu online—because it isn’t fixed. Spring brings
            asparagus, ramps, and the first greens; autumn brings game, roots, and
            deeper flavours. Our chef works with farmers and foragers to build each
            progression around what is at its best now.
          </p>
          <p className="text-slate text-lg leading-relaxed mb-6">
            Wine pairing is available (CHF 95 per person). Non-alcoholic pairings too.
            Dietary restrictions can be accommodated with advance notice. Price includes
            service.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            To see a sample progression and full details, visit our Menu page. To secure
            your place at the counter, reserve below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Button href="/reservations" variant="primary" size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
            Book Your Tasting
          </Button>
          <p className="mt-6 text-sm text-slate">
            <Link href="/menu" className="text-gold hover:underline">View sample menu</Link>
            {' · '}
            <Link href="/experience" className="text-gold hover:underline">The experience</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
