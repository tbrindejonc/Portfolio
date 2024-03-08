'use client';

import {createContext, PropsWithChildren, useState} from 'react';
import {Langage, LangageContextUtils} from '@appTypes/portfolio';

export const LangageContext = createContext<LangageContextUtils | null>(null);

export default function LanguageProvider({children}: PropsWithChildren) {
  const [langage, setLangage] = useState<Langage>('fr');

  return <LangageContext.Provider value={{langage, setLangage}}>{children}</LangageContext.Provider>;
}
