import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    bodySchema.parse(body);
    // TODO: Send email via Resend/SendGrid, optional store in Supabase
    return NextResponse.json({
      success: true,
      message: 'Thank you. We will respond within 48 hours.',
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
