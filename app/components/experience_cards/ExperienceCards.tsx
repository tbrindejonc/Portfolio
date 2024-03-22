import ExperienceCard from '@components/experience_cards/ExperienceCard';
import {experienceSlides} from '@texts/portfolio/experience/experienceSlides';
import cExperienceCards_experienceCards from '@styles/components/experience_cards/ExperienceCards.styles';

export default function ExperienceCards() {
  return (
    <section id={'experience-cards'} className={cExperienceCards_experienceCards}>
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
