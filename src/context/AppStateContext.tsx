"use client"
import { NasaApiResponse } from '@/types/nasaApiTypes';
import { createContext, useContext, ReactNode, useState } from 'react';

interface AppStateContextProps {
  apodData: NasaApiResponse;
  setApodData: React.Dispatch<React.SetStateAction<any>>;
}

const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

interface AppStateProviderProps {
  children: ReactNode;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [apodData, setApodData] = useState<any | null>(null);

  return (
    <AppStateContext.Provider value={{ apodData, setApodData }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};