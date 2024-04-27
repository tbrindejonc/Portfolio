import Link from 'next/link';

export default function ProjectsEndView() {
  return (
    <section id={'projects-end'}>
      <p>
        Si vous avez envie d’en voir plus sur mes projets, vous pouvez visiter ma page Github, pour consulter mon code
        et éventuellement les sites liés à mes projets !
      </p>
      <Link href={'https://github.com/Timeuh'}>
        <h2>En voir plus</h2>
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
    </section>
  );
}
