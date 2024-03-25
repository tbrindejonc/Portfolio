'use client';

import {vActivity_activity, vActivity_button, vActivity_circle, vActivity_title} from './ActivityView.styles';
import useLanguage from '@hooks/useLanguage';
import activityTexts from '@texts/portfolio/activity/activityTexts';
import activities from '@texts/portfolio/activity/activities';
import Link from 'next/link';
import Activity from '@components/activity/Activity';

export default function ActivityView() {
  const {language} = useLanguage();

  return (
    <section id={'activity'} className={vActivity_activity}>
      <h2 className={vActivity_title}>{activityTexts.title[language]}</h2>
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
      <Link href={'/projects'} className={vActivity_button}>
        {activityTexts.link[language]}
      </Link>
      <div id={'activity-bg-circle'} className={vActivity_circle}></div>
    </section>
  );
}
