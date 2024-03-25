import Link from 'next/link';

export default function ExperiencesEndView() {
  return (
    <div>
      <h2>
        Si vous êtes convaincu par ces expériences et que vous souhaitez travailler avec moi, ou que vous voulez en
        savoir plus, n’hésitez pas à me contacter !
      </h2>
      <Link href={'/contact'}>
        <h3>Contacter</h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M12 5v14' />
          <path d='m19 12-7 7-7-7' />
        </svg>
      </Link>
    </div>
  );
}
