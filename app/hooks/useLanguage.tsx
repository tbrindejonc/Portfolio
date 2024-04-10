'use client';

import {LanguageContext} from '@providers/LanguageProvider';
import {useContext} from 'react';

/**
 * Hook to use the langage context
 */
const useLanguage = () => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) {
    throw new Error('The useLanguage hook must be used within a LanguageProvider');
  }
  return languageContext;
};

export default useLanguage;
