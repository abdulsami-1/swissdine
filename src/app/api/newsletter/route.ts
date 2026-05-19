import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    let data: unknown;
    if (contentType.includes('application/json')) {
      data = await request.json().catch(() => ({}));
    } else {
      const form = await request.formData().catch(() => null);
      data = form ? { email: form.get('email') ?? '' } : {};
    }
    const { email } = bodySchema.parse(data);
    // TODO: Double opt-in via Resend/SendGrid, store in Supabase
    return NextResponse.json({
      success: true,
      message: `Thank you for subscribing with ${email}. Please check your email to confirm.`,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid email' },
      { status: 400 }
    );
  }
}
