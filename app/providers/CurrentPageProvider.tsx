'use client';

import {createContext, PropsWithChildren, useState} from 'react';
import {CurrentPageContextUtils, Page} from '@appTypes/portfolio';

export const CurrentPageContext = createContext<CurrentPageContextUtils | null>(null);

export default function LanguageProvider({children}: PropsWithChildren) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  /**
   * Switch the active page
   *
   * @param {Page} newPage
   */
  const switchPage = (newPage: Page) => {
    switch (newPage) {
      case Page.EXPERIENCES:
        setCurrentPage(1);
        break;
      case Page.SKILLS:
        setCurrentPage(2);
        break;
      case Page.PROJECTS:
        setCurrentPage(3);
        break;
      case Page.CONTACT:
        setCurrentPage(4);
        break;
      default:
        setCurrentPage(0);
    }
  };

  return <CurrentPageContext.Provider value={{currentPage, switchPage}}>{children}</CurrentPageContext.Provider>;
}
