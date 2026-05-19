import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Experience',
  description:
    'An intimate 23-seat counter in Zürich. Arrival, the counter, the rhythm of the menu, and the departure—the full experience at The Counter.',
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
