import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import Image from 'next/image';
import useLanguage from '@hooks/useLanguage';
import {Technology} from '@prisma/client';
import MiniTechnologyCard from '@components/technology/mini_technology_card/MiniTechnologyCard';
import Link from 'next/link';
import React from 'react';
import {
  cProject_consultContainer,
  cProject_consultImage,
  cProject_consultItems,
  cProject_descriptionContainer,
  cProject_detailsContainer,
  cProject_detailsTitle,
  cProject_image,
  cProject_imageBackground,
  cProject_paragraph,
  cProject_project,
  cProject_techContainer,
  cProject_techHolder,
  cProject_texts,
  cProject_title,
} from './Project.styles';
import projectTexts from '@app/projects/texts/projectTexts';
import {Direction} from '@appTypes/portfolio';

type Props = {
  project: CompleteProjectFromApi;
  direction: Direction;
};

export default function Project({project, direction}: Props) {
  const {language} = useLanguage();

  return (
    <div className={cProject_project}>
      <div className={cProject_descriptionContainer}>
        <div className={cProject_texts(direction)}>
          <h2 className={cProject_title}>{project.name}</h2>
          <p className={cProject_paragraph(direction)}>{project.description[language]}</p>
        </div>
        <Image
          src={project.links.gif.href}
          alt={project.gif}
          width={0}
          height={0}
          sizes={'100vw'}
          className={cProject_image}
        />
      </div>
      <div className={cProject_detailsContainer}>
        <div className={cProject_techContainer}>
          <h2 className={cProject_detailsTitle}>{projectTexts.techsTitle[language]}</h2>
          <div className={cProject_techHolder}>
            {project.technologies.map((tech: Technology) => {
              return <MiniTechnologyCard key={tech.id} technology={tech} />;
            })}
          </div>
        </div>
        <div className={cProject_techContainer}>
          <h2 className={cProject_detailsTitle}>{projectTexts.consultTitle[language]}</h2>
          <div className={cProject_consultContainer}>
            <Link href={project.github} className={cProject_consultItems}>
              <div className={cProject_imageBackground}>
                <Image
                  src={'/images/portfolio/projects/github.png'}
                  alt={'Github'}
                  width={0}
                  height={0}
                  sizes={'100vw'}
                  className={cProject_consultImage}
                />
              </div>
              <h2>Github</h2>
            </Link>
            <Link href={project.live_version} className={cProject_consultItems}>
              <div className={cProject_imageBackground}>
                <Image
                  src={'/images/portfolio/projects/website.png'}
                  alt={'Live version'}
                  width={0}
                  height={0}
                  sizes={'100vw'}
                  className={cProject_consultImage}
                />
              </div>
              <h2>{projectTexts.websiteTitle[language]}</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
