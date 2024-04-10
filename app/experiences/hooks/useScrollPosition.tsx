import {useEffect, useState} from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const appearancePos = (2 / 3) * window.innerHeight;
      const windowHeight = window.innerHeight;
      const currentY = window.scrollY;

      if (currentY > windowHeight * 3) {
        setScrollPosition(3);
        return;
      }

      if (currentY > windowHeight * 2 + appearancePos) {
        setScrollPosition(2);
        return;
      }

      if (currentY > windowHeight + appearancePos) {
        setScrollPosition(1);
        return;
      }

      setScrollPosition(0);
    };

    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      return window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
