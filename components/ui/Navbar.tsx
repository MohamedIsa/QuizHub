"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "../../utils/supabase/client"; // Adjust the import path as necessary

export default function Navbar() {
  const supabase = createClient();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { user } } = await supabase.auth.getUser(); // Get the current user
      setIsLoggedIn(!!user); // Set logged in state based on user existence
    };

    checkUserSession();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut(); // Sign out from Supabase
    setIsLoggedIn(false); // Update the logged in state
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold ">
          <Link href="/">Quiz Hub</Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link href="/profile" className="text-white hover:text-gray-300">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-white hover:text-gray-300">
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login" className="text-white hover:text-gray-300">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
