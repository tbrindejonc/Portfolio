import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import React, {ReactNode} from 'react';
import {Language} from '@appTypes/portfolio';
import {Technology} from '@prisma/client';
import Image from 'next/image';
import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

type Props = {
  experience: CompleteExperienceFromApi;
  children: ReactNode;
};

type CompositionProps = {
  experience: CompleteExperienceFromApi;
  language: Language;
};

const containerStyle = vstack({
  gap: {
    base: 6,
    md: 8,
    xl: 6,
  },
});

const baseLoadingStyle = css({
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  w: 'full',
  animation: 'pulse',
});

const titleLoadingStyle = css({
  h: {
    base: 6,
    md: 14,
    xl: 10,
  },
});

const paragraphLoadingStyle = css({
  h: {
    base: 16,
    md: 32,
    xl: 24,
  },
});

const experienceStyle = css({
  alignItems: 'center',
  bgColor: {
    base: 'neutral.light/50',
    _dark: 'neutral.dark/50',
  },
  backdropBlur: {
    base: '10px',
    _dark: '20px',
  },
  backdropFilter: 'auto',
  borderRadius: '2xl',
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row',
  },
  gap: {
    base: 8,
    md: 12,
    xl: 8,
  },
  h: '80vh',
  justifyContent: 'center',
  p: {
    base: 6,
    md: 8,
  },
  w: {
    base: '90vw',
    xl: '80vw',
  },
  transition: 'all 0.5s',
});

const experienceContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: {
    base: 12,
    md: 20,
    xl: 12,
  },
  h: 'fit',
  w: 'full',
});

const loadingTechsStyle = hstack({
  gap: 4,
});

const loadingTechItemStyle = css({
  animation: 'pulse',
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  h: {
    base: 14,
    md: 20,
  },
  w: {
    base: 14,
    md: 20,
  },
});

const loadingImageStyle = css({
  animation: 'pulse',
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  h: {
    base: 24,
    md: 40,
    xl: 72,
  },
  w: {
    base: '2/5',
    xl: '3/5',
  },
});

const logoAndTitleStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    base: 'row',
    xl: 'column',
  },
  gap: {
    base: 4,
    md: 8,
  },
  justifyContent: {
    base: 'flex-start',
    xl: 'center',
  },
  w: 'full',
});

const companyTitleStyle = css({
  animation: 'pulse',
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  h: {
    base: 16,
    md: 24,
  },
  w: {
    base: '3/5',
    xl: '2/5',
  },
});

export default function Experience({experience, children}: Props) {
  return (
    <div id={`experience-${experience.id}`} className={experienceStyle}>
      {children}
    </div>
  );
}

Experience.TextContainer = function ExperienceTextContainer({children}: {children: ReactNode}) {
  return <div className={`experience-container ${experienceContainerStyle}`}>{children}</div>;
};

Experience.Company = function ExperienceCompany({experience, language}: CompositionProps) {
  return (
    <div>
      <h2>{experience.company}</h2>
      <p>{experience.description[language]}</p>
    </div>
  );
};

Experience.LoadingCompany = function ExperienceLoadingCompany() {
  return (
    <div className={`loading-company ${containerStyle}`}>
      <h2 className={`${baseLoadingStyle} ${titleLoadingStyle}`} />
      <p className={`${baseLoadingStyle} ${paragraphLoadingStyle}`} />
    </div>
  );
};

Experience.Job = function ExperienceJob({experience, language}: CompositionProps) {
  return (
    <div>
      <h3>{experience.job_title[language]}</h3>
      <p>{experience.job_description[language]}</p>
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

Experience.Technologies = function ExperienceTechnologies({experience, language}: CompositionProps) {
  return (
    <div>
      <h3>Les technologies utilisées</h3>
      {experience.technologies.map((technology: Technology, index: number) => {
        return <p key={index}>{technology.name}</p>;
      })}
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

Experience.LogoAndPeriod = function ExperienceLogoAndPeriod({experience, language}: CompositionProps) {
  return (
    <div>
      <Image src={experience.links.logo.href} alt={experience.company} width={0} height={0} sizes={'100vw'} />
      <h3>
        {new Date(experience.start_date).toLocaleDateString()} - {new Date(experience.end_date).toLocaleDateString()}
      </h3>
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
