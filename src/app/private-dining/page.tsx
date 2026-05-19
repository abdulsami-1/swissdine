'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Calendar } from '@/components/ui/Calendar';

const privateDiningSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email required'),
  phone: z.string().min(6, 'Phone required'),
  preferredDate: z.date().optional(),
  guestCount: z.number().min(1).max(23),
  eventType: z.string().min(1, 'Please select an event type'),
  specialRequests: z.string().optional(),
});

type PrivateDiningFormData = z.infer<typeof privateDiningSchema>;

const eventTypes = [
  { value: 'corporate', label: 'Corporate entertaining' },
  { value: 'celebration', label: 'Celebration (birthday, anniversary, proposal)' },
  { value: 'culinary', label: 'Culinary experience (masterclass, wine dinner)' },
  { value: 'other', label: 'Other' },
];

const guestCountOptions = Array.from({ length: 23 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} guest${i > 0 ? 's' : ''}`,
}));

export default function PrivateDiningPage() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PrivateDiningFormData>({
    resolver: zodResolver(privateDiningSchema),
    defaultValues: { guestCount: 10 },
  });

  const preferredDate = watch('preferredDate');

  const onSubmit = async (data: PrivateDiningFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch('/api/private-dining', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          preferredDate: data.preferredDate
            ? data.preferredDate.toISOString().slice(0, 10)
            : null,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(json.message ?? 'Unable to submit. Please try again.');
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <section className="relative aspect-[21/9] min-h-[280px] bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
          alt="The counter set for private dining"
          fill
          className="object-cover opacity-85"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ivory mb-2">
              An Exclusive Evening
            </h1>
            <p className="text-ivory/90 text-lg max-w-xl mx-auto">
              Reserve the entire counter for your group. Capacity: 23 guests maximum.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                Use cases
              </h2>
              <ul className="space-y-4 text-slate">
                <li><strong className="text-charcoal">Corporate entertaining</strong> — Clients, partners, and teams in an intimate setting.</li>
                <li><strong className="text-charcoal">Celebrations</strong> — Birthdays, anniversaries, proposals.</li>
                <li><strong className="text-charcoal">Culinary experiences</strong> — Masterclasses, wine dinners, bespoke menus.</li>
              </ul>
              <p className="mt-8 text-slate">
                Custom-quoted based on menu and services. Minimum spend: CHF 5,000.
              </p>
            </div>
            <div className="bg-cream rounded-lg p-8">
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-6">
                Send an inquiry
              </h2>
              {submitSuccess && (
                <p className="mb-4 text-success text-sm" role="status">
                  Thank you. We will be in touch within 48 hours.
                </p>
              )}
              {submitError && (
                <p className="mb-4 text-error text-sm" role="alert">
                  {submitError}
                </p>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input label="Name" error={errors.name?.message} {...register('name')} />
                <Input label="Company (optional)" error={errors.company?.message} {...register('company')} />
                <Input label="Email" type="email" error={errors.email?.message} {...register('email')} />
                <Input label="Phone" type="tel" error={errors.phone?.message} {...register('phone')} />
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred date</label>
                  <Calendar
                    selected={preferredDate}
                    onSelect={(d) => setValue('preferredDate', d)}
                    minDate={new Date()}
                  />
                </div>
                <Select
                  label="Guest count (1–23)"
                  options={guestCountOptions}
                  error={errors.guestCount?.message}
                  {...register('guestCount', {
                    setValueAs: (v: string) => (v === '' ? undefined : Number(v)),
                  })}
                />
                <Select
                  label="Event type"
                  options={eventTypes}
                  placeholder="Select"
                  error={errors.eventType?.message}
                  {...register('eventType')}
                />
                <Textarea
                  label="Special requests"
                  error={errors.specialRequests?.message}
                  {...register('specialRequests')}
                />
                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send Inquiry'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
