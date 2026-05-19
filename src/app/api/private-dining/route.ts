import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(6),
  preferredDate: z.string().optional(),
  guestCount: z.number().min(1).max(23),
  eventType: z.string(),
  specialRequests: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    bodySchema.parse(body);
    // TODO: Store in Supabase, send email via Resend/SendGrid to restaurant + auto-reply to guest
    return NextResponse.json({
      success: true,
      message: 'Inquiry received. We will be in touch within 48 hours.',
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
