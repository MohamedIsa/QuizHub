import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(supabaseUrl);
  console.error(supabaseAnonKey);
  throw new Error("Missing Supabase environment variables");
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
