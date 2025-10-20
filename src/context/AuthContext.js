import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (password !== '12345') return false;
    if (username.toLowerCase() === 'admin') {
      setUser({ role: 'admin' });
    } else {
      setUser({ role: 'mahasiswa' });
    }
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
