import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "expo-router";
import React, { ReactNode, useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext({
  user: {},
  setUser: ({}) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({});
  const [session, setSession] = useState<Session | null>(null);

  const router = useRouter();

  const getUser = async () => {
    if (session?.user) {
      router.push("/(tabs)/home");
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      getUser();
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      getUser();
    });
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/(auth)/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
