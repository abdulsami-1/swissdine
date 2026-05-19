'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      'An evening that reminded us why we travel for food. Intimate, precise, and deeply memorable.',
    author: 'Marco & Elena',
    city: 'Milan',
  },
  {
    quote:
      'The counter experience is unlike any other. You are not just dining—you are part of the craft.',
    author: 'Sophie L.',
    city: 'Zürich',
  },
  {
    quote:
      'Every course told a story. We left full, but also full of gratitude for such careful cooking.',
    author: 'Thomas & Anna',
    city: 'Berlin',
  },
  {
    quote:
      'Worth every franc. The pacing, the flavours, the silence of the room—everything was considered.',
    author: 'James K.',
    city: 'London',
  },
  {
    quote:
      'Two Michelin stars feel earned here. No theatre, just exceptional food and genuine warmth.',
    author: 'Claire M.',
    city: 'Paris',
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal text-center mb-12">
          Words from Our Guests
        </h2>
        <div className="relative min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="font-serif text-xl md:text-2xl text-charcoal italic mb-6">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="text-slate text-sm uppercase tracking-wider">
                {current.author} — {current.city}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-8" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all w-2 ${
                i === index ? 'bg-gold w-6' : 'bg-charcoal/20'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
