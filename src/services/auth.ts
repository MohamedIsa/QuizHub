import supabase from "../utils/supabase/client";

interface LoginResponse {
  user: any | null;
  error: string | null;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Sign In Error:", error.message);
    return { user: null, error: error.message };
  }

  return { user: data.user, error: null };
}
