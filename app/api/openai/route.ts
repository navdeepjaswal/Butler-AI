import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

const MAX_REQUESTS = 10;

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

    const supabase = await createClient();

    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check user's request count
    const { data: requestData, error: countError } = await supabase
      .from('user_requests')
      .select('request_count')
      .eq('user_id', user.id)
      .single();

    if (countError && countError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      return NextResponse.json(
        { error: 'Failed to check request limit' },
        { status: 500 }
      );
    }

    const currentCount = requestData?.request_count || 0;

    if (currentCount >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Maximum request limit reached', isLimitReached: true },
        { status: 429 }
      );
    }

    // Process the request
    const { message, isFollowUp, isSummary } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    let systemPrompt = "";
    let userMessage = message;

    if (isSummary) {
      systemPrompt = "You are a helpful assistant that creates concise, informative summaries of conversations. Focus on the main topics discussed and key outcomes. Keep summaries under 100 characters.";
    } else if (isFollowUp) {
      systemPrompt = "You are a helpful assistant generating follow-up questions. Generate natural, contextually relevant questions that would help continue the conversation.";
    } else {
      systemPrompt = "You are Butler, a friendly and patient AI assistant designed to help seniors with technology. Your responses should be clear, concise, and easy to understand. Avoid technical jargon unless necessary, and when used, explain it in simple terms. Always maintain a warm, respectful tone.";
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      temperature: isSummary ? 0.3 : 0.7,
      max_tokens: isSummary ? 100 : 500,
    });

    // Update request count
    const { error: updateError } = await supabase
      .from('user_requests')
      .upsert(
        { 
          user_id: user.id,
          request_count: currentCount + 1,
          last_request: new Date().toISOString()
        },
        { onConflict: 'user_id' }
      );

    if (updateError) {
      console.error('Failed to update request count:', updateError);
    }

    return NextResponse.json({
      response: completion.choices[0].message.content,
      remainingRequests: MAX_REQUESTS - (currentCount + 1)
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