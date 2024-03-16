import Link from 'next/link';
import {notFoundStyle, returnToHomeStyle, titleStyle} from '@styles/views/NotFoundView.styles';

export default function NotFoundView() {
  return (
    <main className={notFoundStyle}>
      <h1 className={titleStyle}>Désolé, cette page n&apos;existe pas !</h1>
      <Link href={'/'} className={returnToHomeStyle}>
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
