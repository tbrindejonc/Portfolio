import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import useLanguage from '@hooks/useLanguage';
import Experience from '@app/experiences/components/Experience';

type Props = {
  experience: CompleteExperienceFromApi;
  isLoading: boolean;
};

export default function ExperienceFactory({experience, isLoading}: Props) {
  const {language} = useLanguage();

  if (isLoading) {
    return (
      <Experience experience={experience}>
        <Experience.TextContainer>
          <Experience.LoadingCompany />
          <Experience.LoadingJob />
          <Experience.LoadingTechnologies />
        </Experience.TextContainer>
        <Experience.LoadingLogoAndPeriod />
      </Experience>
    );
  }

  return (
    <Experience experience={experience}>
      <Experience.TextContainer>
        <Experience.Company language={language} experience={experience} />
        <Experience.Job language={language} experience={experience} />
        <Experience.Technologies language={language} experience={experience} />
      </Experience.TextContainer>
      <Experience.LogoAndPeriod language={language} experience={experience} />
    </Experience>
  );
}
