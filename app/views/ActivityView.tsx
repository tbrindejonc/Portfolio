import {css} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';
import Link from 'next/link';
import Activities from '@components/activities/Activities';

const activityStyle = vstack({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  gap: 12,
  pb: 10,
});

const titleStyle = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontFamily: 'bricolage',
  fontSize: '4xl',
  fontWeight: 'bold',
  textAlign: 'center',
});

const projectsLinkStyle = css({
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'md',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: '2xl',
  fontWeight: 'bold',
  p: 2,
  textAlign: 'center',
  w: '4/5',
});

export default function ActivityView() {
  return (
    <section id={'activity'} className={activityStyle}>
      <h2 className={titleStyle}>Mes activités</h2>
      <Activities />
      <Link href={'/projects'} className={projectsLinkStyle}>
        Voir mes projets
      </Link>
    </section>
  );
}
