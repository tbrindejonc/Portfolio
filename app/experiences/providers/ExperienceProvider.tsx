import {createContext, ReactNode} from 'react';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

export const ExperienceContext = createContext<null | CompleteExperienceFromApi>(null);

type Props = {
  children: ReactNode;
  experience: CompleteExperienceFromApi;
};

export default function ExperienceProvider({children, experience}: Props) {
  return <ExperienceContext.Provider value={experience}>{children}</ExperienceContext.Provider>;
}
