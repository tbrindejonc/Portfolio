'use client';

import activities from '@texts/portfolio/activity/activities';
import Activity from '@components/activities/Activity';

export default function Activities() {
  return (
    <>
      <Activity activity={activities[0]}>
        <Activity.Heading title={activities[0].title}>
          <Activity.GameIcon />
        </Activity.Heading>
      </Activity>
      <Activity activity={activities[1]}>
        <Activity.Heading title={activities[1].title}>
          <Activity.DevIcon />
        </Activity.Heading>
      </Activity>
      <Activity activity={activities[2]}>
        <Activity.Heading title={activities[2].title}>
          <Activity.DiscoveriesIcon />
        </Activity.Heading>
      </Activity>
    </>
  );
}
