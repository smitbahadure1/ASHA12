import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "EN" ? "हिंदी" : "EN");
  };

  const isHindi = currentLanguage === "हिंदी";

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, isHindi }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}