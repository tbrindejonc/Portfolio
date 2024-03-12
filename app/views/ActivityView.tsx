import Link from 'next/link';
import Activities from '@components/activities/Activities';
import {activityStyle, projectsLinkStyle, titleStyle} from '@styles/views/ActivityView.styles';

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
