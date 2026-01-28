import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ error: 'Resend API key is not configured' }, { status: 500 });
        }

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Oxbridge Contact <onboarding@resend.dev>',
                to: 'contact@accessoxbridge.io',
                subject: `New Contact Form Submission from ${name}`,
                reply_to: email,
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h1>
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Name:</strong> <span style="color: #333;">${name}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong> <span style="color: #333;">${email}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Phone:</strong> <span style="color: #333;">${phone || 'Not provided'}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Message:</strong>
              <p style="color: #333; white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #888; font-size: 12px;">This message was sent from the contact form on Access Oxbridge website.</p>
          </div>
        `,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error('Resend error:', data);
            return NextResponse.json({ error: data.message || 'Failed to send email' }, { status: res.status });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
