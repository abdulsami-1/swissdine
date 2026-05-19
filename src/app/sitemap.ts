import { MetadataRoute } from 'next';

const baseUrl = 'https://the-counter.ch';

const staticSlugs = [
  '',
  '/experience',
  '/menu',
  '/chef',
  '/reservations',
  '/private-dining',
  '/journal',
  '/press',
  '/contact',
  '/privacy',
  '/michelin-restaurant-zurich',
  '/chefs-table-zurich',
  '/fine-dining-zurich',
  '/tasting-menu-zurich',
];

const journalSlugs = [
  'spring-at-the-counter',
  'the-journey-of-our-lake-perch',
  'on-restraint',
  'a-day-in-the-life',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticSlugs.map((path) => ({
    url: `${baseUrl}${path || '/'}`.replace(/\/$/, '') || baseUrl + '/',
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : ('monthly' as const),
    priority: path === '' ? 1 : 0.8,
  }));

  const journalPages: MetadataRoute.Sitemap = journalSlugs.map((slug) => ({
    url: `${baseUrl}/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...journalPages];
}
