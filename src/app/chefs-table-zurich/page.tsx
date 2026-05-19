import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Chef's Table Zürich | The Counter",
  description:
    "The ultimate chef's table experience in Zürich. 23 seats at one counter—watch the kitchen create your tasting menu. Two Michelin stars. Book your seat.",
  keywords: ["chef's table Zürich", 'counter dining Zürich', 'chef table experience Switzerland'],
  openGraph: {
    title: "Chef's Table Zürich | The Counter",
    description: "23 seats. One counter. You are part of the kitchen.",
    url: 'https://the-counter.ch/chefs-table-zurich',
  },
};

export default function ChefsTableZurichPage() {
  return (
    <div>
      <section className="relative py-24 md:py-32 bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Chef&apos;s Table Zürich
          </h1>
          <p className="text-xl text-ivory/90 max-w-2xl mx-auto">
            Not a table in the corner—a seat at the counter. Every guest faces the kitchen.
            Watch hands move with precision. Hear the sizzle. This is the chef’s table
            reimagined: intimate, intentional, unforgettable.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-8">
            The Counter Is Your Chef’s Table
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-6">
            In many restaurants, the “chef’s table” is a single table with a view of the
            kitchen. At The Counter, the entire room is the chef’s table. Twenty-three
            seats run along one counter. There are no barriers. You are not a spectator—you
            are part of the service. Courses are plated and presented in front of you.
            Questions are welcomed. Stories are shared.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            The meal unfolds over approximately 2.5 hours. Expect 5–7 courses, each
            introduced personally. Wine pairings are available. This is dining as dialogue:
            between the kitchen and the guest, the ingredient and the plate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Button href="/reservations" variant="primary" size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
            Book Your Seat at the Counter
          </Button>
          <p className="mt-6 text-sm text-slate">
            <Link href="/experience" className="text-gold hover:underline">The experience</Link>
            {' · '}
            <Link href="/menu" className="text-gold hover:underline">Tasting menu</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
