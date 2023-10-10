// src/context/DomainContext.tsx

import React, { useState, useContext, createContext, ReactNode } from 'react';

interface DomainContextProps {
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
}

const DomainContext = createContext<DomainContextProps | undefined>(undefined);

export const useDomain = () => {
  const context = useContext(DomainContext);
  if (!context) {
    throw new Error('useDomain must be used within a DomainProvider');
  }
  return context;
};

interface DomainProviderProps {
  children: ReactNode;
}

export const DomainProvider: React.FC<DomainProviderProps> = ({ children }) => {
  const [domain, setDomain] = useState<string>('');

  const value = {
    domain,
    setDomain,
  };

  return <DomainContext.Provider value={value}>{children}</DomainContext.Provider>;
};
