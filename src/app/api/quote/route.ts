import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, location, items, notes, urgency } = body;

    if (!name || !email || !items || (Array.isArray(items) && items.length === 0)) {
      return NextResponse.json(
        { error: 'Name, email, and at least one item designation are required.' },
        { status: 400 }
      );
    }

    const rfqNumber = `RFQ-JBS-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    console.log(`[RFQ Submission] Number: ${rfqNumber}`, {
      name,
      company,
      email,
      phone,
      location,
      urgency: urgency || 'Standard',
      items,
      notes
    });

    return NextResponse.json({
      success: true,
      rfqNumber,
      message: 'Your RFQ quotation request has been logged successfully. An industrial sales engineer will prepare the proforma quotation.',
      estimatedTurnaround: urgency === 'Breakdown' ? '30 minutes' : '2 hours',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process quotation request. Please retry.' },
      { status: 500 }
    );
  }
}
