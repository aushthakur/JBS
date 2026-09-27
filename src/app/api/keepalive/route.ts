import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Render keep-alive ping successful',
    time: new Date().toISOString() 
  });
}
