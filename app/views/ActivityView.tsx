'use client';

import {activityStyle, projectsLinkStyle, titleStyle} from '@styles/views/ActivityView.styles';
import useLanguage from '@hooks/useLanguage';
import activityTexts from '@texts/portfolio/activity/activityTexts';
import activities from '@texts/portfolio/activity/activities';
import Link from 'next/link';
import Activity from '@components/Activity';

export default function ActivityView() {
  const {langage} = useLanguage();

  return (
    <section id={'activity'} className={activityStyle}>
      <h2 className={titleStyle}>{activityTexts.title[langage]}</h2>
      <Activity activity={activities[0]} variant={'game'}>
        <Activity.Heading title={activities[0].title} variant={'game'}>
          <Activity.GameIcon />
        </Activity.Heading>
      </Activity>
      <Activity activity={activities[1]} variant={'dev'}>
        <Activity.Heading title={activities[1].title} variant={'dev'}>
          <Activity.DevIcon />
        </Activity.Heading>
      </Activity>
      <Activity activity={activities[2]} variant={'discoveries'}>
        <Activity.Heading title={activities[2].title} variant={'discoveries'}>
          <Activity.DiscoveriesIcon />
        </Activity.Heading>
      </Activity>
      <Link href={'/projects'} className={projectsLinkStyle}>
        {activityTexts.link[langage]}
      </Link>
    </section>
  );
}
