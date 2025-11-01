import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://picsum.photos/id/0/info', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch photo');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch photo' },
      { status: 500 }
    );
  }
}
