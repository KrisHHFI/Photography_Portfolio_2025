"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface GlobalContextType {
  menuVisible: boolean;
  toggleMenu: () => void;
  activeGallery: string;
  setActiveGallery: (gallery: string) => void;
}

// Create the context with a default value
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [activeGallery, setActiveGallery] = useState<string>('BW Head Shots');

  const toggleMenu = () => setMenuVisible(prev => !prev);

  return (
    <GlobalContext.Provider value={{ menuVisible, toggleMenu, activeGallery, setActiveGallery }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
