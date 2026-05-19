import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Stories from The Counter Zürich: seasonal updates, ingredient journeys, chef philosophy, and behind-the-scenes.',
};

const articles = [
  {
    slug: 'spring-at-the-counter',
    title: 'Spring at The Counter: Asparagus, Ramps, and Renewal',
    excerpt: 'The first green shoots of the year shape our menu. A look at how spring arrives on the plate.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    readTime: '4 min read',
    date: '2024-03-15',
  },
  {
    slug: 'the-journey-of-our-lake-perch',
    title: 'The 48-Hour Journey of Our Lake Perch',
    excerpt: 'From the lake to the counter—how we source and treat one of Switzerland’s most delicate fish.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
    readTime: '5 min read',
    date: '2024-02-28',
  },
  {
    slug: 'on-restraint',
    title: 'On Restraint: Why Less is More on the Plate',
    excerpt: 'The chef on editing, clarity, and the discipline of leaving things out.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    readTime: '6 min read',
    date: '2024-02-10',
  },
  {
    slug: 'a-day-in-the-life',
    title: 'A Day in the Life: Morning Prep at The Counter',
    excerpt: 'What happens before the first guest arrives—from market to mise en place.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80',
    readTime: '5 min read',
    date: '2024-01-22',
  },
];

export default function JournalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-4">
          Journal
        </h1>
        <p className="text-slate text-lg max-w-2xl mx-auto">
          Seasonal updates, ingredient stories, and thoughts from the kitchen.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="group bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={`/journal/${article.slug}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-caption text-slate uppercase tracking-wider mb-2">
                  {new Date(article.date).toLocaleDateString('en-CH', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                  {' · '}
                  {article.readTime}
                </p>
                <h2 className="font-serif text-xl font-semibold text-charcoal group-hover:text-gold transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-slate text-sm">{article.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
