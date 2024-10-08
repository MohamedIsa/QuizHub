'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import Navbar from "../../components/ui/Navbar";
const Home = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      // Get the authenticated user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        router.push('/login');
        return;
      }

      // Fetch the user's name from the 'user' table
      const { data, error: nameError } = await supabase
        .from('users') // Use the correct table name
        .select('name') // Column name that holds the user's name
        .eq('id', user.id) // Use the user's ID to fetch their information
        .single();

      if (nameError) {
        console.error('Name fetch error:', nameError);
      } else {
        setUserName(data.name); // Set the user's name
      }
    };

    fetchUser();
  }, [router, supabase]);

  return (
  <>

    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome, {userName || 'Guest'}!</h1>
        <p className="mt-4">You are now logged in.</p>
      </div>
    </div>
  </>
  );
};

export default Home;
