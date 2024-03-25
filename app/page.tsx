import LandingView from '@views/landing/LandingView';
import JourneyView from '@views/journey/JourneyView';
import ExperienceView from '@views/experience/ExperienceView';
import ActivityView from '@views/activity/ActivityView';
import ContactView from '@views/contact/ContactView';

export default function Home() {
  return (
    <main>
      <LandingView />
      <JourneyView />
      <ExperienceView />
      <ActivityView />
      <ContactView />
    </main>
  );
}
