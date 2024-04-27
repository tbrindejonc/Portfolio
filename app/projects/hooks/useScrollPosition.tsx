import {useEffect, useState} from 'react';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';

const useScrollPosition = (projects: CompleteProjectFromApi[]) => {
  const [currentActive, setCurrentActive] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const firstProject = document.getElementById(projects[0].name);
      const secondProject = document.getElementById(projects[1].name);
      const thirdProject = document.getElementById(projects[2].name);
      const fourthProject = document.getElementById(projects[3].name);
      const scrollTop = window.scrollY;
      const screenOffset = 200;

      if (!firstProject || !secondProject || !thirdProject || !fourthProject) return;

      if (scrollTop > fourthProject.offsetTop - screenOffset) {
        setCurrentActive(3);
        return;
      }

      if (scrollTop > thirdProject.offsetTop - screenOffset) {
        setCurrentActive(2);
        return;
      }

      if (scrollTop > secondProject.offsetTop - screenOffset) {
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
  }, [projects]);

  return currentActive;
};

export default useScrollPosition;
