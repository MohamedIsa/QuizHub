"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "../../utils/supabase/client";

const SignOut = () => {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleSignOut = async () => {
      await supabase.auth.signOut();
      router.push("/");
    };

    handleSignOut();
  }, [router, supabase.auth]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Signing you out...</h1>
    </div>
  );
};

export default SignOut;
