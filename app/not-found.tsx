import {Metadata} from 'next';
import NotFoundView from '@views/NotFoundView';

export const metadata: Metadata = {
  title: 'Timeuh - Page introuvable',
};

export default function NotFound() {
  return <NotFoundView />;
}
