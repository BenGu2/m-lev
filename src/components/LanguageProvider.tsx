'use client';

import { createContext, useContext, useState } from 'react';

type Direction = 'ltr' | 'rtl';
type Language = 'en' | 'he';

interface LanguageContextType {
  direction: Direction;
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  direction: 'ltr',
  language: 'en',
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'he' : 'en');
  };

  const direction: Direction = language === 'en' ? 'ltr' : 'rtl';

  return (
    <LanguageContext.Provider value={{ direction, language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
