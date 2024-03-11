import ExperienceCard from '@components/experience_cards/ExperienceCard';
import {hstack} from '@/styled-system/patterns';
import {experienceSlides} from '@texts/portfolio/experience/experienceSlides';

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
      <ExperienceCard slide={experienceSlides[1]} cardOrder={'first'}>
        <ExperienceCard.FormationIcon />
        <ExperienceCard.Paragraph slide={experienceSlides[1]} cardOrder={'first'} />
      </ExperienceCard>
      <ExperienceCard slide={experienceSlides[2]} cardOrder={'second'}>
        <ExperienceCard.SpeechIcon />
        <ExperienceCard.Paragraph slide={experienceSlides[2]} cardOrder={'second'} />
      </ExperienceCard>
      <ExperienceCard slide={experienceSlides[0]} cardOrder={'third'}>
        <ExperienceCard.MoreIcon />
        <ExperienceCard.Paragraph slide={experienceSlides[0]} cardOrder={'third'} />
        <ExperienceCard.SeeMoreButton />
      </ExperienceCard>
    </section>
  );
}
