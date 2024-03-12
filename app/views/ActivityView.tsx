'use client';

import Link from 'next/link';
import Activities from '@components/activities/Activities';
import {activityStyle, projectsLinkStyle, titleStyle} from '@styles/views/ActivityView.styles';
import useLanguage from '@hooks/useLanguage';
import activityTexts from '@texts/portfolio/activity/activityTexts';

export default function ActivityView() {
  const {langage} = useLanguage();

  return (
    <section id={'activity'} className={activityStyle}>
      <h2 className={titleStyle}>{activityTexts.title[langage]}</h2>
      <Activities />
      <Link href={'/projects'} className={projectsLinkStyle}>
        {activityTexts.link[langage]}
      </Link>
    </section>
  );
}
