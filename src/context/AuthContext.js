import react, { useState, createContext } from "react";

export const AuthCotext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;

  const [auth, setAuth] = useState(undefined);

  const login = (setData) => {
    setAuth(setData);
  };

  const logout = () => {
    setAuth(undefined);
  };
  const valueContext = { auth, login, logout };

  return (
    <AuthCotext.Provider value={valueContext}>{children}</AuthCotext.Provider>
  );
}
