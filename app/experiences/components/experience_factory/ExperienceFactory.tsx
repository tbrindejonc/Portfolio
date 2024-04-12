import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import useLanguage from '@hooks/useLanguage';
import Experience from '@app/experiences/components/experience/Experience';
import ExperienceProvider from '@app/experiences/providers/ExperienceProvider';

type Props = {
  experience?: CompleteExperienceFromApi;
  isLoading?: boolean;
};

export default function ExperienceFactory({experience = {} as CompleteExperienceFromApi, isLoading = false}: Props) {
  const {language} = useLanguage();

  if (isLoading) {
    return (
      <ExperienceProvider experience={experience} language={language}>
        <Experience>
          <Experience.LoadingContainer>
            <Experience.LoadingCompany />
            <Experience.LoadingJob />
            <Experience.LoadingTechnologies />
          </Experience.LoadingContainer>
          <Experience.LoadingLogoAndPeriod />
        </Experience>
      </ExperienceProvider>
    );
  }

  return (
    <ExperienceProvider experience={experience} language={language}>
      <Experience>
        <Experience.TextContainer>
          <Experience.Company />
          <Experience.Job />
          <Experience.Technologies />
        </Experience.TextContainer>
        <Experience.LogoAndPeriod />
      </Experience>
    </ExperienceProvider>
  );
}
