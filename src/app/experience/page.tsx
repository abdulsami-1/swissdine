'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const sections = [
  {
    id: 'arrival',
    title: 'Arrival',
    copy: 'You arrive to warmth and quiet anticipation. Coat taken. Glass of Champagne offered. The counter awaits—just 23 seats, each one a front-row view.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    imageAlt: 'Entrance or coat check, soft focus, welcoming light',
  },
  {
    id: 'the-counter',
    title: 'The Counter',
    copy: 'Take your seat. The kitchen is your stage. Watch hands move with precision. Hear the sizzle. Smell the reduction. This is theater, but you are not a spectator—you are part of it.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    imageAlt: 'Guest POV from counter seat, chef working in background',
  },
  {
    id: 'the-rhythm',
    title: 'The Rhythm',
    copy: 'Courses arrive with deliberate pacing. Each plate introduced personally. Questions welcomed. Stories shared. The meal unfolds over 2.5 hours—a conversation, not a transaction.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80',
    imageAlt: 'Chef presenting dish, making eye contact with guest',
  },
  {
    id: 'the-departure',
    title: 'The Departure',
    copy: 'You leave full, but light. Satisfied, but still thinking. This is the kind of meal that stays with you.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80',
    imageAlt: 'Empty counter post-service, ambient lighting, calm',
  },
];

export default function ExperiencePage() {
  const reducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const transition = reducedMotion ? { duration: 0 } : { duration: 0.5 };

  return (
    <div className="relative">
      {/* Sticky section nav - desktop only */}
      <nav
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-20"
        aria-label="Section navigation"
      >
        <div className="flex flex-col gap-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeId === s.id
                  ? 'bg-gold scale-125 ring-2 ring-gold/30'
                  : 'bg-charcoal/25 hover:bg-charcoal/50'
              }`}
              aria-label={`Go to ${s.title}`}
              aria-current={activeId === s.id ? 'true' : undefined}
            />
          ))}
        </div>
      </nav>

      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className="py-20 md:py-28 border-b border-charcoal/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className={idx % 2 === 1 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, x: reducedMotion ? 0 : idx % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={transition}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
                  {section.title}
                </h2>
                <p className="text-slate text-lg leading-relaxed">
                  {section.copy}
                </p>
              </motion.div>
              <motion.div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-charcoal/5 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
                initial={{ opacity: 0, x: reducedMotion ? 0 : idx % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={transition}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <div className="py-20 bg-charcoal text-ivory text-center">
        <p className="text-lg mb-8 max-w-xl mx-auto">
          The journey lasts approximately 2.5 hours. Two seatings per evening: 18:30 and 21:00.
        </p>
        <Button href="/reservations" variant="primary" size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
          Reserve Your Experience
        </Button>
      </div>
    </div>
  );
}
