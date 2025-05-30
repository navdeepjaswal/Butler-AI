import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  // Get the code and next URL from the request
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    // Create the Supabase client
    const supabase = await createClient();

    // Exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code);

    // Redirect to the dashboard or home page after successful authentication
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If there's no code, redirect to the login page
  return NextResponse.redirect(new URL("/auth/login", request.url));
}
