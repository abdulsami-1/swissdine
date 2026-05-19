'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Intimacy',
    description:
      '23 seats facing the creative theater. No barriers. No distance. Pure connection.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
    icon: '◉',
  },
  {
    title: 'Craft',
    description:
      'Hyper-seasonal ingredients. Precision technique. Each plate a study in balance.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    icon: '◇',
  },
  {
    title: 'Journey',
    description:
      'A narrative told through flavor, texture, and time. Expect 2.5 hours of discovery.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    icon: '—',
  },
];

export function ExperienceTriptych() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-serif text-3xl md:text-4xl font-semibold text-charcoal text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              className="group bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className="absolute top-4 left-4 text-gold text-2xl font-serif opacity-90"
                  aria-hidden
                >
                  {card.icon}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 uppercase tracking-wider">
                  {card.title}
                </h3>
                <p className="text-slate text-body-desktop">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
