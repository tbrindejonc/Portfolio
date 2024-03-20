'use client';

import useExperiences from '../hooks/useExperiences';
import Image from 'next/image';
import {
  baseContainerStyle,
  baseLooperStyle,
  bottomLooperStyle,
  firstAndThirdExpStyle,
  otherBottomLooperStyle,
  otherTopLooperStyle,
  rainbowLooperStyle,
  secondExpStyle,
  topLooperStyle,
} from '../styles/views/ExperiencesView.styles';
import ExperienceFactory from '../components/ExperienceFactory';

export default function ExperiencesView() {
  const {data, isLoading} = useExperiences();

  if (!data) {
    return;
  }

  return (
    <section id={'experiences-display'}>
      <div id={'first-exp'} className={`${baseContainerStyle} ${firstAndThirdExpStyle}`}>
        <Image
          src={'/images/portfolio/experiences/looper_blue.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${baseLooperStyle} ${topLooperStyle}`}
        />
        <Image
          src={'/images/portfolio/experiences/looper_purple.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${baseLooperStyle} ${bottomLooperStyle}`}
        />
        <ExperienceFactory experience={data.items[0]} isLoading={isLoading} />
      </div>
      <div id={'second-exp'} className={`${baseContainerStyle} ${secondExpStyle}`}>
        <Image
          src={'/images/portfolio/experiences/looper_rainbow.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={rainbowLooperStyle}
        />
        <ExperienceFactory experience={data.items[1]} isLoading={isLoading} />
      </div>
      <div id={'third-exp'} className={`${baseContainerStyle} ${firstAndThirdExpStyle}`}>
        <Image
          src={'/images/portfolio/experiences/looper_blue.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${baseLooperStyle} ${otherTopLooperStyle}`}
        />
        <Image
          src={'/images/portfolio/experiences/looper_purple.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${baseLooperStyle} ${otherBottomLooperStyle}`}
        />
        <ExperienceFactory experience={data.items[2]} isLoading={isLoading} />
      </div>
    </section>
  );
}
