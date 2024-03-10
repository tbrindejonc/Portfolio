import {experienceSlides} from '@texts/portfolio/experience/experienceSlides';
import {Slide} from '@appTypes/portfolio';
import ExperienceCard from '@components/experience_cards/ExperienceCard';
import {hstack} from '@/styled-system/patterns';

export default function ExperienceCards() {
  const experienceCardsStyle = hstack({
    display: {
      base: 'none',
      xl: 'flex',
    },
    columnGap: 20,
    width: '90vw',
  });

  return (
    <section id={'experience-cards'} className={experienceCardsStyle}>
      {experienceSlides.map((slide: Slide, index: number) => {
        return <ExperienceCard key={index} slide={slide} />;
      })}
    </section>
  );
}
