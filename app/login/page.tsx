"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../utils/supabase/client'; 
import { Input } from '../../components/ui/input'; 
import { Button } from '../../components/ui/button'; 
import { Label } from '../../components/ui/label'; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card'; 

const Login = () => {
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) {
        setError(error.message);
        console.error('Login error:', error);
      } else {
        const userId = data.user?.id; // Get the user ID
        console.log('Logged in user ID:', userId); // Debugging log
  
        if (userId) {
          // Check if the user is already in the admin table
          const { data: adminData, error: fetchAdminError } = await supabase
            .from('admin')
            .select('id')
            .eq('id', userId)
            .single();
  
          console.log('Admin table data:', adminData); // Debugging log
  
          if (fetchAdminError && fetchAdminError.code !== 'PGRST116') {
            // Handle error if it's not because the user doesn't exist
            setError(fetchAdminError.message);
            console.error('Admin fetch error:', fetchAdminError);
          } else if (!adminData) {
            // Insert user into the admin table if not found
            const { error: insertError } = await supabase
              .from('admin')
              .insert([{ id: userId }]);
  
            if (insertError) {
              setError(insertError.message);
              console.error('Insert error:', insertError); // Debugging log
            } else {
              console.log('User ID added to admin table:', userId); // Debugging log
            }
          }
  
          // Fetch the user's name
          const { data: userData, error: fetchUserError } = await supabase
            .from('users') // Ensure the table name is correct
            .select('name')
            .eq('id', userId)
            .single();
  
          if (fetchUserError) {
            setError(fetchUserError.message);
          } else {
            setUserName(userData?.name);
            router.push('/home'); // Redirect to homepage after successful login
          }
        }
      }
    } catch (error) {
      setError('An unexpected error occurred.');
      console.error('Error:', error);
    }
  };
  

  useEffect(() => {
    if (userName) {
      console.log(`Welcome, ${userName}`);
    }
  }, [userName]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          {!userName ? (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          ) : (
            <div>
              <h2>Welcome, {userName}!</h2>
              <p>You are successfully logged in.</p>
            </div>
          )}
        </CardContent>
        <p className="text-xs text-center pb-4">
          Don&apos;t have an account? <a href="/signup" className="text-blue-400 hover:text-blue-500">Sign up</a>
        </p>
      </Card>
    </div>
  );
};

export default Login;
