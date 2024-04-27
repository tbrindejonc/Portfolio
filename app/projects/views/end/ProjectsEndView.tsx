'use client';

import Link from 'next/link';
import {
  vProjEnd_container,
  vProjEnd_decoration,
  vProjEnd_end,
  vProjEnd_link,
  vProjEnd_svg,
  vProjEnd_text,
} from './ProjectsEndView.styles';
import useLanguage from '@hooks/useLanguage';
import endViewTexts from '@app/projects/texts/endViewTexts';

export default function ProjectsEndView() {
  const {language} = useLanguage();

  return (
    <section id={'projects-end'} className={vProjEnd_end}>
      <div className={vProjEnd_container}>
        <p className={vProjEnd_text}>{endViewTexts.text[language]}</p>
        <div className={vProjEnd_decoration}>
          <Link href={'https://github.com/Timeuh'} className={`group ${vProjEnd_link}`}>
            <h2>{endViewTexts.link[language]}</h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={vProjEnd_svg}
            >
              <path d='M12 5v14' />
              <path d='m19 12-7 7-7-7' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
