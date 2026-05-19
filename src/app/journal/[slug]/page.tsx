import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { notFound } from 'next/navigation';

const articles: Record<
  string,
  { title: string; date: string; readTime: string; image: string; body: string[] }
> = {
  'spring-at-the-counter': {
    title: 'Spring at The Counter: Asparagus, Ramps, and Renewal',
    date: '2024-03-15',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80',
    body: [
      'Spring arrives on the plate in small, precise gestures. The first asparagus from the Aargau, ramps from the forest edge, and the return of herbs that have slept through winter.',
      'We don’t build the menu around a theme; we build it around what is at its best. In March and April, that means green—sharp, sweet, and fleeting.',
      'The dish we call “Awakening” changes every few weeks. Sometimes it’s asparagus with sorrel and egg. Sometimes it’s ramp and goat curd. The constant is the intention: the first bite should feel like the first day of the season.',
      'We work with growers who harvest at dawn and deliver the same morning. The counter allows us to serve that immediacy—to put on the plate what was in the earth hours ago.',
    ],
  },
  'the-journey-of-our-lake-perch': {
    title: 'The 48-Hour Journey of Our Lake Perch',
    date: '2024-02-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&q=80',
    body: [
      'Lake perch is one of Switzerland’s most delicate fish. It doesn’t travel well; it doesn’t keep long. So we work with a single fisherman who brings us his catch from the lake within hours.',
      'From the water to the counter, we have a window of about 48 hours. That constraint shapes everything: how we store it, how we portion it, how we cook it. We don’t mask the flavour; we frame it.',
      'The dish is simple: perch, fennel, brown butter. The complexity is in the timing—the fish must be at room temperature before it hits the pan, and the pan must be hot enough to crisp the skin without overcooking the flesh.',
      'When you sit at the counter, you’re tasting the lake and the clock. We think that’s worth preserving.',
    ],
  },
  'on-restraint': {
    title: 'On Restraint: Why Less is More on the Plate',
    date: '2024-02-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80',
    body: [
      'The hardest part of cooking is not adding another element. We edit constantly. If a dish has five components, we ask: can it live with four? With three?',
      'Restraint isn’t minimalism for its own sake. It’s clarity. When you remove what’s unnecessary, what remains has to be perfect—the right ingredient, the right technique, the right moment.',
      'Guests sometimes ask why a plate looks “simple.” The answer is that we’ve taken things off. The work happens before the plate leaves the kitchen: choosing one oil instead of two, one herb instead of three, one texture that carries the dish.',
      'We’d rather do one thing well than three things adequately. That’s the philosophy in the kitchen and on the plate.',
    ],
  },
  'a-day-in-the-life': {
    title: 'A Day in the Life: Morning Prep at The Counter',
    date: '2024-01-22',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80',
    body: [
      'Service starts at 18:30, but the day starts at 07:00. The first delivery arrives at eight: vegetables, fish, meat. We taste everything. If something isn’t right, it doesn’t go on the menu.',
      'By ten, the team is at the counter—portioning, prepping, reducing. We don’t use many elements per dish, but each one is prepared with the same attention. Stocks, pickles, oils, dough. The mise en place is the foundation.',
      'Lunch is quick. By 15:00 we’re setting the room: glassware, cutlery, linen. The counter is wiped down three times. At 18:00 the first guests are welcomed. The rest is the dialogue we’ve been preparing for all day.',
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: 'Not Found' };
  return {
    title: article.title,
    description: article.body[0].slice(0, 160),
    openGraph: {
      title: article.title,
      description: article.body[0].slice(0, 160),
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="relative aspect-[2/1] rounded-lg overflow-hidden bg-charcoal/5 mb-12">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-4">
          {article.title}
        </h1>
        <p className="text-slate text-sm">
          {new Date(article.date).toLocaleDateString('en-CH', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
          {' · '}
          {article.readTime}
        </p>
      </header>
      <div className="prose prose-lg max-w-none text-slate space-y-6">
        {article.body.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-16 pt-8 border-t border-charcoal/10">
        <Button href="/reservations" variant="primary">
          Reserve Your Experience
        </Button>
      </div>
      <p className="mt-6">
        <Link href="/journal" className="text-gold hover:underline">
          ← Back to Journal
        </Link>
      </p>
    </article>
  );
}
