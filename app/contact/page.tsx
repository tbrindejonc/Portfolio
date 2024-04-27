import {Metadata} from 'next';
import ContactView from './views/ContactView';

export const metadata: Metadata = {
  title: 'Timeuh - Contact',
  description: 'Different ways to contact Timeuh.',
};

export default function Page() {
  return (
    <main>
      <ContactView />
    </main>
  );
}
