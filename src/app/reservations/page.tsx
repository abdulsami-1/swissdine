'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar } from '@/components/ui/Calendar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { format } from 'date-fns';

const reservationSchema = z.object({
  date: z.date({ required_error: 'Please select a date' }),
  timeSlot: z.enum(['18:30', '21:00'], { required_error: 'Please select a time' }),
  guests: z.number().min(1).max(4),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(6, 'Phone number required'),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const timeSlots = [
  { value: '18:30', label: '18:30' },
  { value: '21:00', label: '21:00' },
];

const guestOptions = [
  { value: '1', label: '1 guest' },
  { value: '2', label: '2 guests' },
  { value: '3', label: '3 guests' },
  { value: '4', label: '4 guests' },
];

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2,
      timeSlot: undefined,
    },
  });

  const date = watch('date');

  const onSubmit = async (data: ReservationFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          date: data.date ? format(data.date, 'yyyy-MM-dd') : null,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setSubmitted(true);
      } else {
        setSubmitError(json.message ?? 'Unable to submit. Please try again.');
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-semibold text-charcoal mb-4">
          Request Received
        </h1>
        <p className="text-slate mb-8">
          We will confirm your reservation by email within 24 hours. If your preferred
          date is unavailable, we will suggest alternatives.
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">
          Limited Availability
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-4">
          Reservations
        </h1>
        <p className="text-slate text-lg max-w-2xl mx-auto">
          23 seats per evening. We recommend booking 3–4 weeks in advance for weekends
          and special occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-3">
                Select date
              </label>
              <Calendar
                selected={date}
                onSelect={(d) => setValue('date', d, { shouldValidate: true })}
                minDate={new Date()}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Select
                label="Time"
                options={timeSlots}
                placeholder="Choose time"
                error={errors.timeSlot?.message}
                {...register('timeSlot', { required: true })}
              />
              <Select
                label="Party size"
                options={guestOptions}
                error={errors.guests?.message}
                {...register('guests', {
                  required: true,
                  setValueAs: (v: string) => (v === '' ? undefined : Number(v)),
                })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label="Name"
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label="Email"
                type="email"
                error={errors.email?.message}
                {...register('email')}
              />
            </div>
            <Input
              label="Phone"
              type="tel"
              error={errors.phone?.message}
              {...register('phone')}
            />
            <Textarea
              label="Special requests (dietary, allergies, occasion)"
              error={errors.specialRequests?.message}
              {...register('specialRequests')}
            />
            {submitError && (
              <p className="text-error text-sm" role="alert">
                {submitError}
              </p>
            )}
            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Complete Reservation'}
            </Button>
          </form>
        </div>

        <div className="bg-cream rounded-lg p-8 h-fit">
          <h2 className="font-serif text-xl font-semibold text-charcoal mb-6">
            Pricing
          </h2>
          <ul className="space-y-3 text-slate mb-6">
            <li className="flex justify-between">
              <span>Tasting menu</span>
              <span className="font-medium text-charcoal">CHF 180</span>
            </li>
            <li className="flex justify-between">
              <span>Wine pairing</span>
              <span className="font-medium text-charcoal">CHF 95</span>
            </li>
            <li className="flex justify-between">
              <span>Non-alcoholic pairing</span>
              <span className="font-medium text-charcoal">CHF 55</span>
            </li>
          </ul>
          <p className="text-sm text-slate mb-6">Price includes service. Dietary accommodations available with advance notice.</p>

          <h3 className="font-serif font-semibold text-charcoal mb-3">Reservation policy</h3>
          <ul className="text-sm text-slate space-y-2 list-disc list-inside">
            <li>Reservations open 8 weeks in advance</li>
            <li>Credit card required to hold reservation</li>
            <li>Cancellations accepted up to 48 hours prior (full refund)</li>
            <li>Late cancellations or no-shows: CHF 100 per person</li>
            <li>Seating time: approximately 2.5 hours</li>
            <li>Dress code: Smart casual (jackets appreciated, not required)</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-charcoal/10">
            <p className="text-sm text-charcoal font-medium mb-2">Gift an experience</p>
            <Button href="/contact#gift-voucher" variant="outline" size="sm">
              Purchase Gift Voucher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
