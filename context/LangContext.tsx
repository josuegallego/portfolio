'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: 'es', toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    // 1. Try to get saved language from localStorage
    const saved = localStorage.getItem('portfolio-lang') as Lang | null;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLang(saved);
    } else {
      // 2. If no saved lang, try browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLang('en');
      } else {
        setLang('es');
      }
    }
  }, []);

  const toggle = () => {
    const next = lang === 'es' ? 'en' : 'es';
    setLang(next);
    localStorage.setItem('portfolio-lang', next);
  };

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
