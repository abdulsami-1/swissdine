'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'the-counter-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm text-ivory p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-ivory/90">
          We use cookies for analytics and booking functionality. By continuing you accept our use of cookies.{' '}
          <Link href="/privacy" className="text-gold hover:underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="min-h-[48px] min-w-[48px] px-4 py-2 text-sm border border-ivory/40 text-ivory hover:bg-ivory/10 transition-colors rounded"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={accept}
            className="min-h-[48px] min-w-[48px] px-4 py-2 text-sm bg-gold text-charcoal font-medium hover:bg-gold/90 transition-colors rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
