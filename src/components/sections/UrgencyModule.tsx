'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function UrgencyModule() {
  return (
    <section className="py-16 md:py-20 bg-charcoal text-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="text-gold uppercase tracking-widest text-sm font-medium mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Limited Availability
        </motion.p>
        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Limited Availability — 23 Seats Per Service
        </motion.h2>
        <motion.p
          className="text-ivory/80 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          With only 23 seats per service, reservations are highly sought after. Bookings
          open 8 weeks in advance and fill quickly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            href="/reservations"
            variant="primary"
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold/90"
          >
            Check Availability
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
