import LandingView from '@views/LandingView';
import JourneyView from '@views/JourneyView';
import ExperienceView from '@views/ExperienceView';
import ActivityView from '@views/ActivityView';

export default function Home() {
  return (
    <main>
      <LandingView />
      <JourneyView />
      <ExperienceView />
      <ActivityView />
    </main>
  );
}
