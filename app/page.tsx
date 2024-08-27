// pages/index.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../utils/supabase/client"; // Adjust the import path as necessary
import Navbar from "../components/ui/Navbar";

export default function Home() {
  const supabase = createClient();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { user } } = await supabase.auth.getUser(); // Get the current user

      if (user) {
        setIsLoggedIn(true); // User is logged in
      }
      setLoading(false); // Set loading to false after checking
    };

    checkUserSession();
  }, [supabase.auth]);

  const handleLoginNavigation = () => {
    router.push("/login");
  };

  const handleHomeNavigation = () => {
    router.push("/home"); // Adjust to your home route if necessary
  };

  if (loading) {
    return <p>Loading...</p>; // You can customize loading state
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to <span className="text-red-400">Quiz Hub!</span></h1>
        <p className="mt-4 text-lg">The best place to test your knowledge</p>
        {isLoggedIn ? (
          <button onClick={handleHomeNavigation} className="mt-8 px-4 py-2 bg-green-500 text-white rounded-md">
            Go to Home
          </button>
        ) : (
          <button onClick={handleLoginNavigation} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        )}
      </main>
    </>
  );
}
