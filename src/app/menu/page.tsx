import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'The Tasting Menu',
  description:
    'Seasonal tasting menu at The Counter Zürich. 5–7 courses, wine pairing CHF 95. Dietary accommodations with advance notice.',
};

const springCourses = [
  { roman: 'I', name: 'Awakening', dish: 'Asparagus / Sorrel / Egg Yolk', description: 'The first green shoots of the season, barely touched.' },
  { roman: 'II', name: 'From the Lake', dish: 'Perch / Rhubarb / Buttermilk', description: 'What the water offers, balanced by garden acidity.' },
  { roman: 'III', name: 'Interlude', dish: 'Wild Garlic Custard / Morels', description: 'A moment of earthiness before the main act.' },
  { roman: 'IV', name: 'Earth & Fire', dish: 'Duck / Beetroot / Juniper', description: 'Roasted over cherry wood, glazed with time.' },
  { roman: 'V', name: 'Transition', dish: 'Goat Cheese / Honey / Walnut', description: 'A bridge between courses.' },
  { roman: 'VI', name: 'Sweetness', dish: 'Rhubarb / Vanilla / Meringue', description: "Spring's tartness, softened." },
  { roman: 'VII', name: 'Departure', dish: 'Petit Fours / Herbal Tea', description: 'A quiet close.' },
];

export default function MenuPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <header className="text-center mb-20">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-4">
          The Tasting Menu
        </h1>
        <p className="text-slate text-lg leading-relaxed mb-4">
          Our menu changes with the seasons—sometimes weekly, always intentionally. What
          you experience tonight will never be replicated exactly. This is cooking as
          conversation with nature.
        </p>
        <p className="text-slate text-base">
          Expect 5–7 courses, each paired thoughtfully. Duration: approximately 2.5 hours.
          Wine pairing available.
        </p>
      </header>

      <p className="text-caption text-slate uppercase tracking-wider mb-10">Spring menu (example — April to May)</p>

      <div className="space-y-16">
        {springCourses.map((course) => (
          <article key={course.roman}>
            <span className="text-caption text-slate uppercase tracking-wider block mb-2">
              {course.roman}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-2">
              {course.name}
            </h2>
            <p className="text-gold font-medium mb-3">{course.dish}</p>
            <p className="text-slate leading-relaxed">{course.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-charcoal/10">
        <p className="text-slate mb-6">
          We accommodate dietary restrictions with advance notice. Please inform us when booking.
        </p>
        <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
          Wine pairing available
        </h3>
        <p className="text-slate mb-4">
          Our sommelier selects pairings to complement each course—Alpine whites,
          Burgundian reds, natural expressions.
        </p>
        <p className="text-slate font-medium">CHF 95 per person. Non-alcoholic pairing: CHF 55.</p>
      </div>

      <div className="mt-16 text-center">
        <Button href="/reservations" variant="primary" size="lg">
          Book Your Tasting
        </Button>
      </div>
    </div>
  );
}
