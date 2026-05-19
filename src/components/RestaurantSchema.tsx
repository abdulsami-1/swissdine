export function RestaurantSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'The Counter Zürich',
    image: 'https://the-counter.ch/images/restaurant.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[Street Name & Number]',
      addressLocality: 'Zürich',
      postalCode: '8001',
      addressCountry: 'CH',
    },
    servesCuisine: 'Fine Dining, Seasonal Tasting Menu',
    priceRange: 'CHF 180-250',
    telephone: '+41-44-123-45-67',
    url: 'https://the-counter.ch',
    sameAs: [
      'https://instagram.com/thecounter',
      'https://facebook.com/thecounter',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
    starRating: {
      '@type': 'Rating',
      ratingValue: '2',
      bestRating: '3',
      author: { '@type': 'Organization', name: 'Michelin Guide' },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '18:30',
        closes: '23:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
