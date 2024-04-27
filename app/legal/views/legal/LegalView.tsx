import Link from 'next/link';

export default function LegalView() {
  return (
    <>
      <section id={'author'}>
        <h1>Droits D&apos;auteur</h1>
        <p>
          Ce site est réalisé par Timothée Brindejonc. Il est soumis à la législation sur les droits d&apos;auteur. Les
          icônes utilisées sur ce cite sont la propriété du site Lucide Icons, et ne sont prêtées que pour un usage non
          commercial. Certaines images d’illustration ont été prêtées par le site Unsplash à condition de créditer les
          auteurs :
        </p>
        <Link href={''}>Photo de Farzad sur Unsplash</Link>
        <Link href={''}>Photo de Dom Fou sur Unsplash</Link>
        <p>
          Toute reproduction, représentation, utilisation ou modification de ce site est interdite sans avoir obtenu
          l’autorisation préalable du créateur.
        </p>
      </section>
    </>
  );
}
