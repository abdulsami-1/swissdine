'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  cta?: { text: string; href: string };
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  image,
  imageAlt,
  title,
  description,
  cta,
  className,
  children,
}: CardProps) {
  const content = (
    <>
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-2">
          {title}
        </h3>
        <p className="text-slate text-body-desktop mb-4">{description}</p>
        {cta && (
          <span className="text-gold font-medium text-sm uppercase tracking-wider hover:underline">
            {cta.text}
          </span>
        )}
        {children}
      </div>
    </>
  );

  const wrapperClass = cn(
    'group bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300',
    className
  );

  if (cta?.href) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <Link href={cta.href} className={wrapperClass} style={{ display: 'block' }}>
          {content}
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={wrapperClass}
    >
      {content}
    </motion.article>
  );
}
