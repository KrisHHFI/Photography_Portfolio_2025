"use client";

import { GALLERIES } from '../constants/strings';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { GlobalContextType } from '../constants/interfaces';

// Create the context with a default value
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [activeGallery, setActiveGallery] = useState<string>(GALLERIES.BW_HEAD_SHOTS);

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
