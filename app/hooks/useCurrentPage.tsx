'use client';

import {useContext} from 'react';
import {CurrentPageContext} from '@providers/CurrentPageProvider';

/**
 * Hook to use the current page context
 */
const useLanguage = () => {
  const currentPageContext = useContext(CurrentPageContext);
  if (!currentPageContext) {
    throw new Error('The useCurrentPage hook must be used within a CurrentPageProvider');
  }
  return currentPageContext;
};

export default useLanguage;
