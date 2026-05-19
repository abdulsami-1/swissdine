import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations',
  description:
    'Reserve your seat at The Counter Zürich. 23 seats per evening. Tasting menu CHF 180. Book 3–4 weeks in advance.',
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
