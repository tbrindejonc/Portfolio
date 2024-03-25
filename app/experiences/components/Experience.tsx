import React, {PropsWithChildren, ReactNode} from 'react';
import {Technology} from '@prisma/client';
import Image from 'next/image';
import {
  exp_cExp_companyLogo,
  exp_cExp_companyName,
  exp_cExp_experience,
  exp_cExp_heading,
  exp_cExp_loadingBase,
  exp_cExp_loadingCompanyName,
  exp_cExp_loadingContainer,
  exp_cExp_loadingImage,
  exp_cExp_loadingLogoAndPeriod,
  exp_cExp_loadingParagraph,
  exp_cExp_loadingTechItem,
  exp_cExp_loadingTechs,
  exp_cExp_loadingTitle,
  exp_cExp_loadingWrapper,
  exp_cExp_logoAndPeriod,
  exp_cExp_logoContainer,
  exp_cExp_paragraph,
  exp_cExp_period,
  exp_cExp_techContainer,
  exp_cExp_techsWrapper,
  exp_cExp_textContainer,
  exp_cExp_textWrapper,
} from '../styles/components/Experience.styles';
import techsTitle from '@app/experiences/texts/experienceTexts';
import MiniTechnologyCard from '@components/technology/mini_technology_card/MiniTechnologyCard';
import useExperience from '@app/experiences/hooks/useExperience';

export default function Experience({children}: PropsWithChildren) {
  const {experience} = useExperience();

  return (
    <div id={`experience-${experience.id}`} className={exp_cExp_experience}>
      {children}
    </div>
  );
}

Experience.TextContainer = function ExperienceTextContainer({children}: {children: ReactNode}) {
  return <div className={exp_cExp_textWrapper}>{children}</div>;
};

Experience.Company = function ExperienceCompany() {
  const {experience, language} = useExperience();

  return (
    <div className={exp_cExp_textContainer}>
      <h2 className={exp_cExp_companyName}>{experience.company}</h2>
      <p className={exp_cExp_paragraph}>{experience.description[language]}</p>
    </div>
  );
};

Experience.Job = function ExperienceJob() {
  const {experience, language} = useExperience();

  return (
    <div className={exp_cExp_textContainer}>
      <h3 className={exp_cExp_heading}>{experience.job_title[language]}</h3>
      <p className={exp_cExp_paragraph}>{experience.job_description[language]}</p>
    </div>
  );
};

Experience.Technologies = function ExperienceTechnologies() {
  const {experience, language} = useExperience();

  return (
    <div className={exp_cExp_techsWrapper}>
      <h3 className={exp_cExp_heading}>{techsTitle[language]}</h3>
      <div className={exp_cExp_techContainer}>
        {experience.technologies.map((technology: Technology, index: number) => {
          return <MiniTechnologyCard key={index} technology={technology} />;
        })}
      </div>
    </div>
  );
};

Experience.LogoAndPeriod = function ExperienceLogoAndPeriod() {
  const {experience, language} = useExperience();

  const startDate = new Date(experience.start_date);
  const endDate = new Date(experience.end_date);
  const dateFormat = language === 'french' ? 'fr-FR' : 'en-US';

  const formattedStart = new Intl.DateTimeFormat(dateFormat).format(startDate);
  const formattedEnd = new Intl.DateTimeFormat(dateFormat).format(endDate);

  return (
    <div className={exp_cExp_logoAndPeriod}>
      <div className={exp_cExp_logoContainer}>
        <Image
          src={experience.links.logo.href}
          alt={experience.company}
          width={0}
          height={0}
          sizes={'100vw'}
          className={exp_cExp_companyLogo}
        />
      </div>
      <h3 className={exp_cExp_period}>{`${formattedStart} - ${formattedEnd}`}</h3>
    </div>
  );
};

Experience.LoadingContainer = function ExperienceLoadingContainer({children}: {children: ReactNode}) {
  return <div className={`experience-container ${exp_cExp_loadingContainer}`}>{children}</div>;
};

Experience.LoadingCompany = function ExperienceLoadingCompany() {
  return (
    <div className={`loading-company ${exp_cExp_loadingWrapper}`}>
      <h2 className={`${exp_cExp_loadingBase} ${exp_cExp_loadingTitle}`} />
      <p className={`${exp_cExp_loadingBase} ${exp_cExp_loadingParagraph}`} />
    </div>
  );
};

Experience.LoadingJob = function ExperienceLoadingJob() {
  return (
    <div className={`loading-job ${exp_cExp_loadingWrapper}`}>
      <h3 className={`${exp_cExp_loadingBase} ${exp_cExp_loadingTitle}`} />
      <p className={`${exp_cExp_loadingBase} ${exp_cExp_loadingParagraph}`} />
    </div>
  );
};

Experience.LoadingTechnologies = function ExperienceLoadingTechnologies() {
  const fakeTechs: number[] = [1, 2, 3, 4, 5];

  return (
    <div className={`loading-techs ${exp_cExp_loadingTechs}`}>
      {fakeTechs.map((_: number, index: number) => {
        return <div key={index} className={exp_cExp_loadingTechItem} />;
      })}
    </div>
  );
};

Experience.LoadingLogoAndPeriod = function ExperienceLoadingLogoAndPeriod() {
  return (
    <div className={exp_cExp_loadingLogoAndPeriod}>
      <div className={exp_cExp_loadingImage} />
      <h3 className={exp_cExp_loadingCompanyName} />
    </div>
  );
};
