import { NextResponse } from 'next/server';

export function GET() {
    const adsContent = `google.com, pub-1785692102378858, DIRECT, f08c47fec0942fa0`;

    return new NextResponse(adsContent, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
