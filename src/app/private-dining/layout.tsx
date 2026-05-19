import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Dining',
  description:
    'Reserve the entire counter at The Counter Zürich for corporate events, celebrations, or culinary experiences. Up to 23 guests. Custom menus.',
};

export default function PrivateDiningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
