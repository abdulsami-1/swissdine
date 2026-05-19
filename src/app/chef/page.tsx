import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'The Chef',
  description:
    'Meet the chef behind The Counter Zürich. Philosophy, journey, and what drives the menu—seasonality, craft, and restraint.',
};

const milestones = [
  { year: '2008', title: 'Apprenticeship', description: 'Culinary training, France.' },
  { year: '2012', title: 'Sous Chef', description: 'Michelin 1-Star, Switzerland.' },
  { year: '2016', title: 'Head Chef', description: 'Notable restaurant, Zürich.' },
  { year: '2019', title: 'Opened The Counter', description: 'Zürich.' },
  { year: '2021', title: 'First Michelin Star', description: 'The Counter awarded one star.' },
  { year: '2023', title: 'Second Michelin Star', description: 'Elevated to two stars.' },
];

const inspirations = [
  'The changing light on Lake Zürich',
  'Conversations with farmers and fishermen',
  'The tension between tradition and innovation',
  'The silence before service begins',
];

export default function ChefPage() {
  return (
    <div>
      <section className="relative aspect-[21/9] min-h-[300px] bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80"
          alt="Chef at The Counter Zürich"
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ivory mb-2">
              The Chef
            </h1>
            <p className="text-ivory/90 text-lg max-w-xl">
              &ldquo;Cooking is a dialogue. The counter is where that dialogue happens—between the kitchen and the guest, the ingredient and the plate.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-charcoal mb-8">
            A Culinary Point of View
          </h2>
          <blockquote className="font-serif text-xl md:text-2xl text-charcoal/90 leading-relaxed italic">
            Cooking is listening. To the season, to the ingredient, to the guest. My role is not to impose, but to reveal—what the asparagus wants to say in May, what the turbot offers in November. Precision is respect. Restraint is confidence. At The Counter we have twenty-three seats, one service at a time, so every plate can be considered. We work with farmers and foragers who care as much as we do. The menu is a reflection of what is available, what is honest, and what we think you will remember.
          </blockquote>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-charcoal mb-12 text-center">
            Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-charcoal/20 md:left-1/2 md:-translate-x-px" />
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className={`relative flex gap-8 mb-12 md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 md:w-1/2 ${idx % 2 === 1 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <span className="text-gold font-semibold">{m.year}</span>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mt-1">
                    {m.title}
                  </h3>
                  <p className="text-slate mt-1">{m.description}</p>
                </div>
                <div className="absolute left-4 w-3 h-3 rounded-full bg-gold md:left-1/2 md:-translate-x-1/2 -translate-x-1" />
                <div className="flex-1 md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-charcoal mb-6">
                What Drives the Menu
              </h2>
              <ul className="space-y-4">
                {inspirations.map((item) => (
                  <li key={item} className="flex gap-3 text-slate">
                    <span className="text-gold mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-charcoal/5">
              <Image
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80"
                alt="Seasonal ingredient close-up"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 bg-charcoal text-ivory text-center">
        <Button href="/reservations" variant="primary" size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
          Reserve Your Experience
        </Button>
      </div>
    </div>
  );
}
