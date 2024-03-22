import {createContext, ReactNode} from 'react';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import {ExperienceContextUtils, Language} from '@appTypes/portfolio';

export const ExperienceContext = createContext<null | ExperienceContextUtils>(null);

type Props = {
  children: ReactNode;
  experience: CompleteExperienceFromApi;
  language: Language;
};

export default function ExperienceProvider({children, experience, language}: Props) {
  return <ExperienceContext.Provider value={{experience, language}}>{children}</ExperienceContext.Provider>;
}
