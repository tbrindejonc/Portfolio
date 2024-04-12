import Image from 'next/image';
import Link from 'next/link';
import {
  vSkillsLanding_contentContainer,
  vSkillsLanding_image,
  vSkillsLanding_link,
  vSkillsLanding_paragraph,
  vSkillsLanding_svg,
  vSkillsLanding_title,
  vSkillsLanding_titleContainer,
  vSkillsLanding_titleDecoration,
  vSkillsLanding_view,
} from './SkillsLandingView.styles';

export default function SkillsLandingView() {
  return (
    <section id={'skills-landing'} className={vSkillsLanding_view}>
      <div className={vSkillsLanding_titleContainer}>
        <div className={vSkillsLanding_titleDecoration} />
        <h1 className={vSkillsLanding_title}>Mes compétences</h1>
        <div className={vSkillsLanding_titleDecoration} />
      </div>
      <div className={vSkillsLanding_contentContainer}>
        <Image
          src={'/images/portfolio/skills/code.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={vSkillsLanding_image}
        />
        <div className={vSkillsLanding_contentContainer}>
          <p className={vSkillsLanding_paragraph}>
            A travers mes études et mes expériences professionnelles, j’ai peu apprendre diverses technologies qui me
            sont très utiles pour développer des sites web
          </p>
          <Link href={'#skills-display'} className={`${vSkillsLanding_link} group`}>
            <h2>Découvrir</h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={vSkillsLanding_svg}
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
