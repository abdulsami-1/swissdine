'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjectOptions = [
  { value: 'reservation', label: 'Reservation' },
  { value: 'press', label: 'Press' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'other', label: 'Other' },
];

export default function ContactPage() {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const [newsletterMessage, setNewsletterMessage] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setContactError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setContactSuccess(true);
        reset();
      } else {
        setContactError(json.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setContactError('Something went wrong. Please try again.');
    }
  };

  const onNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterMessage(null);
    const form = e.currentTarget;
    const email = (form.elements.namedItem('newsletter-email') as HTMLInputElement)?.value?.trim();
    if (!email) return;
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setNewsletterMessage('success');
        form.reset();
      } else {
        setNewsletterMessage('error');
      }
    } catch {
      setNewsletterMessage('error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-6">
            Contact
          </h1>
          <div className="space-y-6 text-slate mb-10">
            <p>
              <strong className="text-charcoal">Address</strong>
              <br />
              Bahnhofplatz 15
              <br />
              8001 Zürich
              <br />
              Switzerland
            </p>
            <p>
              <strong className="text-charcoal">Phone</strong>
              <br />
              <a href="tel:+41441234567" className="text-gold hover:underline">
                +41 44 123 45 67
              </a>
            </p>
            <p>
              <strong className="text-charcoal">Email</strong>
              <br />
              <a href="mailto:info@the-counter.ch" className="text-gold hover:underline">
                info@the-counter.ch
              </a>
            </p>
            <p>
              <strong className="text-charcoal">Hours</strong>
              <br />
              Tuesday – Saturday
              <br />
              Dinner 18:30 & 21:00
              <br />
              Closed Sunday & Monday
            </p>
            <p>
              <strong className="text-charcoal">By train</strong>
              <br />
              5-minute walk from Zürich HB
            </p>
            <p>
              <strong className="text-charcoal">By tram</strong>
              <br />
              Lines 4, 11, 15
            </p>
          </div>
          <div className="aspect-video bg-charcoal/10 rounded-lg overflow-hidden">
            <iframe
              title="Map - The Counter Zürich"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5!2d8.5417!3d47.3769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIyJzM2LjgiTiA4wrAzMiczMDAuMSJF!5e0!3m2!1sen!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80"
            />
          </div>
        </div>

        <div id="gift-voucher">
          <h2 id="contact-form" className="font-serif text-2xl font-semibold text-charcoal mb-6">
            General inquiry
          </h2>
          {contactSuccess && (
            <p className="mb-4 text-success text-sm" role="status">
              Thank you. We will respond within 48 hours.
            </p>
          )}
          {contactError && (
            <p className="mb-4 text-error text-sm" role="alert">
              {contactError}
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input label="Name" error={errors.name?.message} {...register('name')} />
            <Input label="Email" type="email" error={errors.email?.message} {...register('email')} />
            <Select
              label="Subject"
              options={subjectOptions}
              placeholder="Select subject"
              error={errors.subject?.message}
              {...register('subject')}
            />
            <Textarea
              label="Message"
              error={errors.message?.message}
              {...register('message')}
            />
            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </Button>
          </form>

          <div id="newsletter" className="mt-16 pt-12 border-t border-charcoal/10">
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-4">
              Newsletter
            </h2>
            <p className="text-slate text-sm mb-4">
              Seasonal updates, journal highlights, and occasional news. No spam.
            </p>
            <form onSubmit={onNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
                name="newsletter-email"
                id="newsletter-email"
                required
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </form>
            {newsletterMessage === 'success' && (
              <p className="mt-2 text-success text-sm" role="status">
                Thank you for subscribing.
              </p>
            )}
            {newsletterMessage === 'error' && (
              <p className="mt-2 text-error text-sm" role="alert">
                Please enter a valid email and try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
