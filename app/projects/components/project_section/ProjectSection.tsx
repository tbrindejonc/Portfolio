import {vstack} from '@/styled-system/patterns';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import Project from '../project/Project';
import {css} from '@/styled-system/css';

type Props = {
  project: CompleteProjectFromApi;
};

export default function ProjectSection({project}: Props) {
  const cProjSection_section = vstack({
    bg: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    h: 'screen',
    justifyContent: 'center',
    p: 4,
    position: 'relative',
  });

  const cProjSection_decoration = css({
    bg: 'neutral.700',
    position: 'absolute',
    top: 0,
    h: 'full',
    w: 10,
  });

  return (
    <section className={cProjSection_section}>
      <Project project={project} />
      <div className={cProjSection_decoration} />
    </section>
  );
}
