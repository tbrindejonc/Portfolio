'use client';

import useExperiences from '@app/experiences/hooks/useExperiences';
import {vstack} from '@/styled-system/patterns';
import Image from 'next/image';
import {css} from '@/styled-system/css';

export default function ExperiencesView() {
  const {data, isLoading} = useExperiences();

  if (!data) {
    return;
  }

  const baseContainerStyle = vstack({
    bgGradient: 'to-bl',
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    h: 'screen',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.5s',
  });

  const firstAndThirdExpStyle: string = css({
    gradientFrom: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    gradientTo: {
      base: 'p_blue.light',
      _dark: 'p_blue.dark',
    },
  });

  const secondExpStyle: string = css({
    gradientFrom: {
      base: 'p_blue.light',
      _dark: 'p_blue.dark',
    },
    gradientTo: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
  });

  const baseLooperStyle: string = css({
    blur: '5px',
    filter: 'auto',
    height: {
      base: '150vw',
      md: '100vw',
      xl: '50vw',
    },
    objectFit: 'cover',
    position: 'absolute',
    width: {
      base: '150vw',
      md: '100vw',
      xl: '50vw',
    },
  });

  const topLooperStyle: string = css({
    top: {
      base: '-15vh',
      xl: '-25vh',
    },
    right: {
      base: '-25vw',
      xl: '-10vw',
    },
  });

  const bottomLooperStyle: string = css({
    bottom: {
      base: '-15vh',
      xl: '-25vh',
    },
    left: {
      base: '-25vw',
      xl: '-10vw',
    },
  });

  const rainbowLooperStyle: string = css({
    blur: '10px',
    filter: 'auto',
    height: {
      base: '300vw',
      md: '150vw',
      xl: '80vw',
    },
    objectFit: 'cover',
    position: 'absolute',
    width: {
      base: '300vw',
      md: '150vw',
      xl: '80vw',
    },
  });

  const otherBottomLooperStyle: string = css({
    bottom: {
      base: '-15vh',
      xl: '-25vh',
    },
    right: {
      base: '-25vw',
      xl: '-10vw',
    },
  });

  const otherTopLooperStyle: string = css({
    top: {
      base: '-15vh',
      xl: '-25vh',
    },
    left: {
      base: '-25vw',
      xl: '-10vw',
    },
  });

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
