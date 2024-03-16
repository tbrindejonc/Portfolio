'use client';

import useExperiences from '@app/experiences/hooks/useExperiences';
import {vstack} from '@/styled-system/patterns';

export default function ExperiencesView() {
  const {data, isLoading} = useExperiences();

  if (!data) {
    return;
  }

  const expContainerStyle = vstack({
    bgColor: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    h: 'screen',
    justifyContent: 'center',
  });

  return (
    <section id={'experiences-display'}>
      <div id={'first-exp'} className={expContainerStyle}>
        {data.items[0].company}
      </div>
      <div id={'second-exp'} className={expContainerStyle}>
        {data.items[1].company}
      </div>
      <div id={'third-exp'} className={expContainerStyle}>
        {data.items[2].company}
      </div>
    </section>
  );
}
