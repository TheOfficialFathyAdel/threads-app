import React, { ReactNode, useContext, useState } from "react";

export const AuthContext = React.createContext({
  user: {},
  setUser: ({}) => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
