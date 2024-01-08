import { createContext, useContext, useState } from "react";

const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);

  const login = () => {
    setAuthState(true);
  };
  const logout = () => {
    setAuthState(false);
  };
  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
