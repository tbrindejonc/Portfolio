import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import React, {ReactNode} from 'react';
import {Language} from '@appTypes/portfolio';
import {Technology} from '@prisma/client';
import Image from 'next/image';

type Props = {
  experience: CompleteExperienceFromApi;
  children: ReactNode;
};

type CompositionProps = {
  experience: CompleteExperienceFromApi;
  language: Language;
};

export default function Experience({experience, children}: Props) {
  return <div id={`experience-${experience.id}`}>{children}</div>;
}

Experience.TextContainer = function ExperienceTextContainer({children}: {children: ReactNode}) {
  return <div>{children}</div>;
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
    <div>
      <h2>Loading...</h2>
      <p>Loading...</p>
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
    <div>
      <h3>Loading...</h3>
      <p>Loading...</p>
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
  const fakeTechs = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      {fakeTechs.map((_: number, index: number) => {
        return <p key={index}>Loading...</p>;
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
    <div>
      <div />
      <h3>Loading...</h3>
    </div>
  );
};
