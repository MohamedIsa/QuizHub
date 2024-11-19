import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation
import supabase from '../utils/supabase/client'; // Make sure client export is compatible with React

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      // Get the authenticated user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        navigate('/login'); // Redirect to login page if no user is found
        return;
      }

      // Fetch the user's name from the 'users' table
      const { data, error: nameError } = await supabase
        .from('users')
        .select('name')
        .eq('id', user.id)
        .single();

      if (nameError) {
        console.error('Name fetch error:', nameError);
      } else {
        setUserName(data.name); // Set the user's name in state
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome, {userName || 'Guest'}!</h1>
        <p className="mt-4">You are now logged in.</p>
      </div>
    </div>
  );
};

export default Dashboard;
