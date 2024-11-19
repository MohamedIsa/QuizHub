import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabase/client"; 


export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { user } } = await supabase.auth.getUser(); 

      if (user) {
        setIsLoggedIn(true);
      }
      setLoading(false); 
    };

    checkUserSession();
  }, []);

  const handleLoginNavigation = () => {
    navigate("/login");
  };

  const handleHomeNavigation = () => {
    navigate("/home"); 
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center  pt-40">
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
