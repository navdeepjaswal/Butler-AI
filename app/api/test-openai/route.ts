import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!process.env.OPENAI_API_KEY,
    apiKeyStart: process.env.OPENAI_API_KEY ? `${process.env.OPENAI_API_KEY.slice(0, 3)}...` : null,
    nodeEnv: process.env.NODE_ENV
  });
} 