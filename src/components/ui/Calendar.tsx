'use client';

import { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  isSameMonth,
  isSameDay,
  isBefore,
  isToday,
} from 'date-fns';
import { cn } from '@/lib/utils';

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  disabled?: (date: Date) => boolean;
  minDate?: Date;
  className?: string;
}

export function Calendar({
  selected,
  onSelect,
  disabled,
  minDate = new Date(),
  className,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(selected ?? new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const start = startOfWeek(monthStart, { weekStartsOn: 1 });
  const end = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days: Date[] = [];
  let day = start;
  while (day <= end) {
    days.push(day);
    day = addDays(day, 1);
  }

  const isDisabled = (date: Date) => {
    if (isBefore(date, minDate)) return true;
    if (disabled?.(date)) return true;
    return false;
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className={cn('bg-cream rounded-lg border border-charcoal/10 p-4', className)}>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
          className="p-2 text-charcoal hover:bg-charcoal/5 rounded min-w-[48px] min-h-[48px]"
          aria-label="Previous month"
        >
          ←
        </button>
        <span className="font-serif font-semibold text-charcoal">
          {format(currentMonth, 'MMMM yyyy')}
        </span>
        <button
          type="button"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 text-charcoal hover:bg-charcoal/5 rounded min-w-[48px] min-h-[48px]"
          aria-label="Next month"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-caption text-slate uppercase tracking-wider mb-2">
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date) => {
          const inMonth = isSameMonth(date, currentMonth);
          const selectedDay = selected && isSameDay(date, selected);
          const disabledDay = isDisabled(date);
          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => !disabledDay && inMonth && onSelect?.(date)}
              disabled={disabledDay}
              className={cn(
                'min-h-[44px] rounded-md text-sm transition-colors',
                !inMonth && 'text-slate/50',
                inMonth && 'text-charcoal',
                selectedDay && 'bg-gold text-charcoal font-medium',
                !selectedDay && inMonth && !disabledDay && 'hover:bg-charcoal/10',
                disabledDay && 'cursor-not-allowed opacity-40',
                isToday(date) && !selectedDay && 'ring-1 ring-charcoal/30'
              )}
            >
              {format(date, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}
