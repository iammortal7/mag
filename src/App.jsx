import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get the current session on first load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup listener when the component unmounts
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Show dashboard if user is logged in, otherwise show auth
  return session ? <Dashboard user={session.user} /> : <Auth />;
}

export default App;
