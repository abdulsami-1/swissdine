import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  date: z.string(),
  timeSlot: z.enum(['18:30', '21:00']),
  guests: z.number().min(1).max(4),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  specialRequests: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    bodySchema.parse(body);

    // TODO: Integrate with SevenRooms API or your booking engine
    // For now we just validate and return success; you can store in Supabase or send email via Resend
    // await sendBookingConfirmation(parsed);
    // await createBookingInSevenRooms(parsed);

    return NextResponse.json({
      success: true,
      message: 'Reservation request received. We will confirm by email.',
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.flatten() },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}
