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
} from '../styles/ExperiencesView.styles';

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
        {data.items[0].company}
        <Image
          src={'/images/portfolio/experiences/looper_purple.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${baseLooperStyle} ${bottomLooperStyle}`}
        />
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
        {data.items[1].company}
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
        {data.items[2].company}
        <Image
          src={'/images/portfolio/experiences/looper_purple.png'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={`${baseLooperStyle} ${otherBottomLooperStyle}`}
        />
      </div>
    </section>
  );
}
