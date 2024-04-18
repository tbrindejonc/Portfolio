import {useEffect, useState} from 'react';

const useScrollStep = () => {
  const [currentActive, setCurrentActive] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const tools = document.getElementById('skills-tools');
      const mastered = document.getElementById('skills-mastered');
      const learning = document.getElementById('skills-learning');
      const planned = document.getElementById('skills-planned');
      const scrollTop = window.scrollY;
      const screenOffset = 200;

      if (!tools || !mastered || !learning || !planned) return;

      if (scrollTop > planned.offsetTop - screenOffset) {
        setCurrentActive(3);
        return;
      }

      if (scrollTop > learning.offsetTop - screenOffset) {
        setCurrentActive(2);
        return;
      }

      if (scrollTop > mastered.offsetTop - screenOffset) {
        setCurrentActive(1);
        return;
      }

      setCurrentActive(0);
      return;
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return currentActive;
};

export default useScrollStep;
