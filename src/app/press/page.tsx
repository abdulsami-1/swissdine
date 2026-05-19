import type { Metadata } from 'next';
import { Star, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Accolades',
  description:
    'Michelin 2-star, Gault&Millau 18 points. Press and awards for The Counter Zürich.',
};

const awards = [
  { name: 'Michelin Guide', detail: 'Two Michelin Stars', icon: Star },
  { name: 'Gault&Millau', detail: '18 Points', icon: Award },
  { name: "World's 50 Best", detail: 'Discovery', icon: Award },
  { name: 'Falstaff', detail: '95 Points', icon: Award },
];

const pressQuotes = [
  {
    quote: 'One of Zürich&rsquo;s most exciting culinary destinations.',
    publication: 'NZZ',
    url: '#',
  },
  {
    quote: 'A counter experience that rewards attention.',
    publication: 'Bilanz',
    url: '#',
  },
  {
    quote: 'Precision and poetry in equal measure.',
    publication: 'Falstaff',
    url: '#',
  },
];

export default function PressPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-4">
          Press & Accolades
        </h1>
        <p className="text-slate text-lg max-w-2xl mx-auto">
          Recognition from the Michelin Guide, Gault&Millau, and the international press.
        </p>
      </header>

      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-charcoal mb-8">
          Awards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <div
              key={award.name}
              className="bg-cream rounded-lg p-6 text-center border border-charcoal/5"
            >
              <award.icon className="w-10 h-10 text-gold mx-auto mb-3" aria-hidden />
              <h3 className="font-serif font-semibold text-charcoal">{award.name}</h3>
              <p className="text-slate text-sm mt-1">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-semibold text-charcoal mb-8">
          Press
        </h2>
        <div className="space-y-8">
          {pressQuotes.map((item) => (
            <blockquote
              key={item.publication}
              className="border-l-4 border-gold pl-6 py-2"
            >
              <p className="font-serif text-xl text-charcoal italic mb-2">
                &ldquo;{item.quote}&rdquo;
              </p>
              <cite className="text-slate text-sm not-italic">
                — {item.publication}
                {item.url && (
                  <>
                    {' · '}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline"
                    >
                      Read full article
                    </a>
                  </>
                )}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-16 pt-12 border-t border-charcoal/10">
        <h2 className="font-serif text-xl font-semibold text-charcoal mb-4">
          Chef recognition
        </h2>
        <ul className="text-slate space-y-2">
          <li>Rising Star Chef 2021</li>
          <li>Guest Judge — Bocuse d&apos;Or</li>
          <li>Featured in NZZ, Bilanz, Falstaff, and international publications</li>
        </ul>
      </section>
    </div>
  );
}
