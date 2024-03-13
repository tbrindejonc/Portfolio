'use client';

import {LangageContext} from '@providers/LanguageProvider';
import {useContext} from 'react';

/**
 * Hook to use the langage context
 */
const useLanguage = () => {
  const langageContext = useContext(LangageContext);
  if (!langageContext) {
    throw new Error('The useLangage hook must be used within a LangageProvider');
  }
  return langageContext;
};

export default useLanguage;
