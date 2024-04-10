import {useEffect, useState} from 'react';
import {AppLink} from '@appTypes/portfolio';
import appLinks from '@texts/portfolio/navbar/appLinks';
import {usePathname} from 'next/navigation';

/**
 * Hook that returns the index of the current page based on the current location.
 *
 * @returns {number} The index of the current page.
 */
const useCurrentLocation = (): number => {
  const location = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const matchedPage: AppLink | undefined = appLinks.find((link: AppLink) => {
      return link.href.toLowerCase() === location;
    });
    const pageIndex: number = appLinks.indexOf(matchedPage as AppLink);

    setCurrentPage(pageIndex);
  }, [location]);

  return currentPage;
};

export default useCurrentLocation;
