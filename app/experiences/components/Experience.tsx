import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import React, {ReactNode} from 'react';
import {Language} from '@appTypes/portfolio';
import {Technology} from '@prisma/client';
import Image from 'next/image';
import {API_TECH_LOGO_URL} from '@constants/portfolio';
import {
  baseLoadingStyle,
  companyLogoAndPeriodStyle,
  companyLogoContainerStyle,
  companyLogoStyle,
  companyNameStyle,
  companyTitleStyle,
  containerStyle,
  experienceContainerStyle,
  experienceStyle,
  expHeadingStyle,
  jobPeriodStyle,
  loadingContainerStyle,
  loadingImageStyle,
  loadingTechItemStyle,
  loadingTechsStyle,
  logoAndTitleStyle,
  paragraphLoadingStyle,
  paragraphStyle,
  techContainerStyle,
  techImageContainer,
  techImageStyle,
  techItemStyle,
  techsContainerStyle,
  textContainerStyle,
  titleLoadingStyle,
} from '@app/experiences/styles/components/Experience.styles';
import techsTitle from '@app/experiences/texts/experienceTexts';

type Props = {
  experience: CompleteExperienceFromApi;
  children: ReactNode;
};

type CompositionProps = {
  experience: CompleteExperienceFromApi;
  language: Language;
};

export default function Experience({experience, children}: Props) {
  return (
    <div id={`experience-${experience.id}`} className={experienceStyle}>
      {children}
    </div>
  );
}

Experience.TextContainer = function ExperienceTextContainer({children}: {children: ReactNode}) {
  return <div className={experienceContainerStyle}>{children}</div>;
};

Experience.Company = function ExperienceCompany({experience, language}: CompositionProps) {
  return (
    <div className={textContainerStyle}>
      <h2 className={companyNameStyle}>{experience.company}</h2>
      <p className={paragraphStyle}>{experience.description[language]}</p>
    </div>
  );
};

Experience.Job = function ExperienceJob({experience, language}: CompositionProps) {
  return (
    <div className={textContainerStyle}>
      <h3 className={expHeadingStyle}>{experience.job_title[language]}</h3>
      <p className={paragraphStyle}>{experience.job_description[language]}</p>
    </div>
  );
};

Experience.Technologies = function ExperienceTechnologies({experience, language}: CompositionProps) {
  return (
    <div className={techsContainerStyle}>
      <h3 className={expHeadingStyle}>{techsTitle[language]}</h3>
      <div className={techContainerStyle}>
        {experience.technologies.map((technology: Technology, index: number) => {
          return (
            <div key={index} className={techItemStyle}>
              <div className={techImageContainer}>
                <Image
                  src={API_TECH_LOGO_URL + technology.logo}
                  alt={technology.name}
                  width={0}
                  height={0}
                  sizes={'100vw'}
                  className={techImageStyle}
                />
              </div>
              <p>{technology.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Experience.LogoAndPeriod = function ExperienceLogoAndPeriod({experience, language}: CompositionProps) {
  const startDate = new Date(experience.start_date);
  const endDate = new Date(experience.end_date);
  const dateFormat = language === 'french' ? 'fr-FR' : 'en-US';

  const formattedStart = new Intl.DateTimeFormat(dateFormat).format(startDate);
  const formattedEnd = new Intl.DateTimeFormat(dateFormat).format(endDate);

  return (
    <div className={companyLogoAndPeriodStyle}>
      <div className={companyLogoContainerStyle}>
        <Image
          src={experience.links.logo.href}
          alt={experience.company}
          width={0}
          height={0}
          sizes={'100vw'}
          className={companyLogoStyle}
        />
      </div>
      <h3 className={jobPeriodStyle}>{`${formattedStart} - ${formattedEnd}`}</h3>
    </div>
  );
};

Experience.LoadingContainer = function ExperienceLoadingContainer({children}: {children: ReactNode}) {
  return <div className={`experience-container ${loadingContainerStyle}`}>{children}</div>;
};

Experience.LoadingCompany = function ExperienceLoadingCompany() {
  return (
    <div className={`loading-company ${containerStyle}`}>
      <h2 className={`${baseLoadingStyle} ${titleLoadingStyle}`} />
      <p className={`${baseLoadingStyle} ${paragraphLoadingStyle}`} />
    </div>
  );
};

Experience.LoadingJob = function ExperienceLoadingJob() {
  return (
    <div className={`loading-job ${containerStyle}`}>
      <h3 className={`${baseLoadingStyle} ${titleLoadingStyle}`} />
      <p className={`${baseLoadingStyle} ${paragraphLoadingStyle}`} />
    </div>
  );
};

Experience.LoadingTechnologies = function ExperienceLoadingTechnologies() {
  const fakeTechs: number[] = [1, 2, 3, 4, 5];

  return (
    <div className={`loading-techs ${loadingTechsStyle}`}>
      {fakeTechs.map((_: number, index: number) => {
        return <div key={index} className={loadingTechItemStyle} />;
      })}
    </div>
  );
};

Experience.LoadingLogoAndPeriod = function ExperienceLoadingLogoAndPeriod() {
  return (
    <div className={logoAndTitleStyle}>
      <div className={loadingImageStyle} />
      <h3 className={companyTitleStyle} />
    </div>
  );
};
