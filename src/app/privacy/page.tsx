import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and cookie usage for The Counter Zürich website.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="font-serif text-4xl font-semibold text-charcoal mb-8">
        Privacy Policy
      </h1>
      <div className="prose prose-slate max-w-none text-slate space-y-6">
        <p>
          The Counter Zürich (&ldquo;we,&rdquo; &ldquo;us&rdquo;) is committed to protecting your
          privacy. This policy describes how we collect, use, and protect your information
          when you use our website the-counter.ch.
        </p>
        <h2 className="font-serif text-xl font-semibold text-charcoal mt-8 mb-2">
          Data we collect
        </h2>
        <p>
          We collect information you provide when making a reservation, sending an inquiry,
          or subscribing to our newsletter: name, email address, phone number, and any
          message or request you submit.
        </p>
        <h2 className="font-serif text-xl font-semibold text-charcoal mt-8 mb-2">
          Cookies and analytics
        </h2>
        <p>
          We use cookies for essential site functionality and, with your consent, for
          analytics (e.g. to understand how visitors use our site). You can accept or
          reject non-essential cookies via our cookie banner.
        </p>
        <h2 className="font-serif text-xl font-semibold text-charcoal mt-8 mb-2">
          Third-party services
        </h2>
        <p>
          Our site may use Google Maps for location and directions, and analytics
          providers. These services have their own privacy policies. We do not sell your
          data to third parties.
        </p>
        <h2 className="font-serif text-xl font-semibold text-charcoal mt-8 mb-2">
          Data retention
        </h2>
        <p>
          We retain reservation and inquiry data as needed to fulfil your request and
          for legitimate business purposes (e.g. accounting). Newsletter data is retained
          until you unsubscribe.
        </p>
        <h2 className="font-serif text-xl font-semibold text-charcoal mt-8 mb-2">
          Your rights (GDPR)
        </h2>
        <p>
          You have the right to access, correct, or delete your personal data, and to
          object to or restrict processing. To exercise these rights or for questions,
          contact us at info@the-counter.ch.
        </p>
        <p className="mt-8">
          <strong>Last updated:</strong> February 2025
        </p>
      </div>
    </div>
  );
}
