'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function PhilosophySection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Where Precision Meets Poetry
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-4">
              At The Counter, every dish is crafted within arm&apos;s reach. Watch as
              seasonal ingredients transform into art. This is dining as dialogue—intimate,
              intentional, unforgettable.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              You sit at the counter not as a spectator but as a guest of the kitchen:
              close enough to hear the quiet focus, to feel the rhythm of the service, to
              taste the intention behind every course. Craft in its most intimate form.
            </p>
          </motion.div>
          <motion.div
            className="relative aspect-[4/5] rounded-lg overflow-hidden bg-charcoal/5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
              alt="The counter and kitchen at The Counter Zürich"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
