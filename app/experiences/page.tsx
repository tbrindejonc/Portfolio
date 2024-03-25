import ExperiencesLandingView from './views/landing/ExperiencesLandingView';
import ExperiencesView from './views/experiences/ExperiencesView';
import ExperiencesEndView from './views/end/ExperiencesEndView';
import {Metadata} from 'next';
import ExperiencesSidebar from '@app/experiences/components/sidebar/sidebar/ExperiencesSidebar';

export const metadata: Metadata = {
  title: 'Timeuh - Experiences',
  description: 'Page which displays Timeuh work experiences.',
};

export default function Page() {
  return (
    <main>
      <ExperiencesSidebar />
      <ExperiencesLandingView />
      <ExperiencesView />
      <ExperiencesEndView />
    </main>
  );
}
