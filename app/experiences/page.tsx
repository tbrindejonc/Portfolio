import ExperiencesLandingView from './views/ExperiencesLandingView';
import {Metadata} from 'next';
import ExperiencesView from './views/ExperiencesView';

export const metadata: Metadata = {
  title: 'Timeuh - Experiences',
  description: 'Page which displays Timeuh work experiences.',
};

export default function Page() {
  return (
    <main>
      <ExperiencesLandingView />
      <ExperiencesView />
    </main>
  );
}
