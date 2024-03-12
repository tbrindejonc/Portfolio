'use client';

import activities from '@texts/portfolio/activity/activities';
import Activity from '@components/activities/Activity';

export default function Activities() {
  return (
    <>
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
    </>
  );
}
