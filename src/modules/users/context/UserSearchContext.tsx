"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const UserSearchContext = createContext<SearchContextType | undefined>(undefined);

export function UserSearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <UserSearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </UserSearchContext.Provider>
  );
}

export function useUserSearch() {
  const context = useContext(UserSearchContext);
  if (!context) {
    throw new Error("useUserSearch must be used within a UserSearchProvider");
  }
  return context;
}