'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Star } from 'lucide-react';

export function HeroVideo() {
  const reducedMotion = useReducedMotion();
  const transition = reducedMotion ? { duration: 0 } : { duration: 0.7 };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal/40" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-ivory">
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          An intimate Michelin-level dining experience in Zürich
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-ivory/90 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.4 }}
        >
          23 seats. One counter. A seasonal tasting journey.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.6 }}
        >
          <Button
            href="/reservations"
            variant="primary"
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold/90"
          >
            Reserve Your Seat
          </Button>
          <Button
            href="/experience"
            variant="ghost"
            size="lg"
            className="text-ivory border border-ivory/50 hover:bg-ivory/10 hover:border-ivory"
          >
            Explore the Experience
          </Button>
        </motion.div>
      </div>

      {/* Michelin badge - bottom left */}
      <div
        className="absolute bottom-6 left-6 flex items-center gap-2 text-ivory/90 text-sm"
        aria-label="2 Michelin stars"
      >
        <Star className="w-5 h-5 fill-gold text-gold" aria-hidden />
        <Star className="w-5 h-5 fill-gold text-gold" aria-hidden />
        <span className="uppercase tracking-wider">Michelin</span>
      </div>
    </section>
  );
}
