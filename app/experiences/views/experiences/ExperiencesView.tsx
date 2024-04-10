'use client';

import useExperiences from '../../hooks/useExperiences';
import Image from 'next/image';
import {
  exp_vExp_bottomLooper,
  exp_vExp_experience,
  exp_vExp_looperBase,
  exp_vExp_otherBottomLooper,
  exp_vExp_otherTopLooper,
  exp_vExp_rainbowLooper,
  exp_vExp_toLeftBackground,
  exp_vExp_topLooper,
  exp_vExp_toRightBackground,
} from './ExperiencesView.styles';
import ExperienceFactory from '../../components/experience_factory/ExperienceFactory';
import ExperiencesSidebar from '../../components/sidebar/sidebar/ExperiencesSidebar';
import ExperiencesNavMenu from '../../components/navmenu/navmenu/ExperiencesNavMenu';

export default function ExperiencesView() {
  const {data, isLoading} = useExperiences();

  if (!data) {
    return;
  }

  return (
    <section id={'experiences-display'}>
      <ExperiencesSidebar data={data} />
      <ExperiencesNavMenu />
      <div
        id={`${data.items[0].company}-${data.items[0].id}`}
        className={`${exp_vExp_experience} ${exp_vExp_toLeftBackground}`}
      >
        <Image
          src={'/images/portfolio/experiences/looper_blue.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${exp_vExp_looperBase} ${exp_vExp_topLooper}`}
        />
        <Image
          src={'/images/portfolio/experiences/looper_purple.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${exp_vExp_looperBase} ${exp_vExp_bottomLooper}`}
        />
        <ExperienceFactory experience={data.items[0]} isLoading={isLoading} />
      </div>
      <div
        id={`${data.items[1].company}-${data.items[1].id}`}
        className={`${exp_vExp_experience} ${exp_vExp_toRightBackground}`}
      >
        <Image
          src={'/images/portfolio/experiences/looper_rainbow.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={exp_vExp_rainbowLooper}
        />
        <ExperienceFactory experience={data.items[1]} isLoading={isLoading} />
      </div>
      <div
        id={`${data.items[2].company}-${data.items[2].id}`}
        className={`${exp_vExp_experience} ${exp_vExp_toLeftBackground}`}
      >
        <Image
          src={'/images/portfolio/experiences/looper_blue.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${exp_vExp_looperBase} ${exp_vExp_otherTopLooper}`}
        />
        <Image
          src={'/images/portfolio/experiences/looper_purple.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${exp_vExp_looperBase} ${exp_vExp_otherBottomLooper}`}
        />
        <ExperienceFactory experience={data.items[2]} isLoading={isLoading} />
      </div>
    </section>
  );
}
