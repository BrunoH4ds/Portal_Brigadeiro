"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipos de dados do usuário
interface User {
  _id: number;
  name: string;
  email: string;
  password: string;
  type: string;
  Ra: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  isDeleted: boolean;
  isLocked: boolean;
  profilePicture: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  setUser: (user: User | null) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Estados do contexto
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Função de logout
  const logout = () => {
    // Limpar o estado do contexto
    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, isAdmin, setUser, setIsLoggedIn, setIsAdmin, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
