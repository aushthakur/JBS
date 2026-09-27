import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const inquiryId = `INQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // In production, dispatch to CRM or corporate mailer (SendGrid, SES, etc.)
    console.log(`[Contact Submission] Ref: ${inquiryId}`, { name, email, phone, company, subject, message });

    return NextResponse.json({
      success: true,
      inquiryId,
      message: 'Your inquiry has been received. Our application engineering team will contact you within 2 business hours.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again or call our hotline.' },
      { status: 500 }
    );
  }
}
