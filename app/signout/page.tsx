"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use this if you are on Next.js 13 or higher
import { createClient } from "../../utils/supabase/client";

const SignOut = () => {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleSignOut = async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
      } else {
        router.push("/");
      }
    };

    handleSignOut();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Signing you out...</h1>
    </div>
  );
};

export default SignOut;
