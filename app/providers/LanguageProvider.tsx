'use client';

import {createContext, PropsWithChildren, useState} from 'react';
import {Language, LanguageContextUtils} from '@appTypes/portfolio';

export const LanguageContext = createContext<LanguageContextUtils | null>(null);

export default function LanguageProvider({children}: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>('french');

  return <LanguageContext.Provider value={{language, setLanguage}}>{children}</LanguageContext.Provider>;
}
