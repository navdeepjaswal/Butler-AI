import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Check if API key exists
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is missing');
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const { message, isFollowUp } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const systemPrompt = isFollowUp 
      ? "You are a helpful assistant generating follow-up questions. Keep them natural, contextual, and specific to the conversation. Return only the questions, separated by |||."
      : "You are Butler, a friendly and patient tech assistant for seniors. Explain things simply, avoid jargon, and give clear step-by-step instructions. Focus on being helpful and reassuring.";

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: isFollowUp ? 0.7 : 0.5,
      max_tokens: isFollowUp ? 150 : 500,
    });

    return NextResponse.json({
      response: response.choices[0].message.content
    });

  } catch (error: any) {
    // Detailed error logging
    console.error('OpenAI API error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      type: error.type,
      status: error.status,
      code: error.code
    });

    // Return a more specific error message
    let errorMessage = 'Error processing your request';
    if (error.code === 'invalid_api_key') {
      errorMessage = 'Invalid API key configuration';
    } else if (error.code === 'insufficient_quota') {
      errorMessage = 'API quota exceeded';
    } else if (error.name === 'AuthenticationError') {
      errorMessage = 'Authentication failed with OpenAI';
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: error.message 
      },
      { status: error.status || 500 }
    );
  }
} 