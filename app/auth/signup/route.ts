import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const cookieStore = cookies();
  const formData = await req.formData();
  
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  // Validate name, email, and password
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Name, email, and password are required" },
      { status: 400 }
    );
  }

  // Initialize Supabase client
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  // Sign up the user using Supabase Auth
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name, // You can store the name as part of the user metadata
      },
      emailRedirectTo: `${url.origin}/auth/callback`, // Optional: redirect after email verification
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // On success, redirect to the home page
  return NextResponse.redirect(url.origin, {
    status: 302,
  });
}
