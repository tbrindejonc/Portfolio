import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import Image from 'next/image';
import {css} from '@/styled-system/css';
import useLanguage from '@hooks/useLanguage';
import {vstack} from '@/styled-system/patterns';

type Props = {
  project: CompleteProjectFromApi;
};

export default function Project({project}: Props) {
  const {language} = useLanguage();

  const cProject_image = css({
    width: '50%',
    height: '50%',
    objectFit: 'cover',
  });

  const cProject_project = vstack({
    backdropBlur: '10px',
    backdropFilter: 'auto',
    bg: {
      base: 'neutral.light/50',
      _dark: 'neutral.800/50',
    },
    borderRadius: '2xl',
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    h: '80%',
    zIndex: 1,
  });

  return (
    <div className={cProject_project}>
      <div>
        <div>
          <h2>{project.name}</h2>
          <p>{project.description[language]}</p>
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
      <div>
        {project.technologies.map((tech) => {
          return <p key={tech.id}>{tech.name}</p>;
        })}
        <div>
          <h2>{project.github}</h2>
          <h2>{project.live_version}</h2>
        </div>
      </div>
    </div>
  );
}
