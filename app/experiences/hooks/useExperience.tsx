import {ExperienceContext} from '@app/experiences/providers/ExperienceProvider';
import {useContext} from 'react';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

/**
 * Custom hook to get the experience object for Experience components
 */
const useExperience = () => {
  const experienceContext = useContext<CompleteExperienceFromApi | null>(ExperienceContext);
  if (!experienceContext) {
    throw new Error('useExperience must be used within an ExperienceProvider');
  }
  return experienceContext;
};

export default useExperience;
