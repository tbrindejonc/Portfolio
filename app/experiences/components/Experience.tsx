import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import React, {ReactNode} from 'react';
import {Language} from '@appTypes/portfolio';
import {Technology} from '@prisma/client';
import Image from 'next/image';
import {circle, grid, hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {API_TECH_LOGO_URL} from '@constants/portfolio';

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
  overflow: 'auto',
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

const loadingContainerStyle = css({
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

const companyNameStyle = css({
  font: 'bricolage',
  fontSize: '3xl',
  fontWeight: 'bold',
});

const expHeadingStyle = css({
  font: 'bricolage',
  fontSize: 'xl',
  fontWeight: 'bold',
});

const paragraphStyle = css({
  fontSize: 'md',
});

const textContainerStyle = vstack({
  alignItems: 'start',
  gap: 2,
});

const experienceContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 4,
});

const techItemStyle = vstack({
  bgColor: {
    base: 'p_blue.300',
    _dark: 'p_blue.800',
  },
  borderRadius: 'md',
  fontSize: '15px',
  justifyContent: 'center',
  p: 1,
  w: 20,
  h: '15vh',
  textAlign: 'center',
});

const techContainerStyle = grid({
  gridTemplateColumns: 3,
  gap: 4,
});

const techImageContainer = circle({
  bgColor: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  size: 14,
});

const techImageStyle = css({
  w: 10,
  h: 10,
  objectFit: 'cover',
});

const techsContainerStyle = vstack({
  alignItems: 'start',
  gap: 4,
});

const companyLogoStyle = css({
  h: 24,
  w: 32,
});

const companyLogoAndPeriodStyle = hstack({
  gap: 4,
});

const companyLogoContainerStyle = vstack({
  bgColor: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  border: '2px solid',
  borderColor: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  borderRadius: 'md',
  justifyContent: 'center',
  h: 36,
  w: 36,
  p: 2,
});

const jobPeriodStyle = css({
  fontWeight: 'bold',
  textAlign: 'center',
  w: 'fit',
});

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

Experience.LoadingContainer = function ExperienceLoadingContainer({children}: {children: ReactNode}) {
  return <div className={`experience-container ${loadingContainerStyle}`}>{children}</div>;
};

Experience.Company = function ExperienceCompany({experience, language}: CompositionProps) {
  return (
    <div className={textContainerStyle}>
      <h2 className={companyNameStyle}>{experience.company}</h2>
      <p className={paragraphStyle}>{experience.description[language]}</p>
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
    <div className={textContainerStyle}>
      <h3 className={expHeadingStyle}>{experience.job_title[language]}</h3>
      <p className={paragraphStyle}>{experience.job_description[language]}</p>
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
    <div className={techsContainerStyle}>
      <h3 className={expHeadingStyle}>Les technologies utilisées</h3>
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
  const startDate = new Date(experience.start_date);
  const endDate = new Date(experience.end_date);

  const formattedStart = new Intl.DateTimeFormat('fr-FR').format(startDate);
  const formattedEnd = new Intl.DateTimeFormat('fr-FR').format(endDate);

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

Experience.LoadingLogoAndPeriod = function ExperienceLoadingLogoAndPeriod() {
  return (
    <div className={logoAndTitleStyle}>
      <div className={loadingImageStyle} />
      <h3 className={companyTitleStyle} />
    </div>
  );
};
