import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import useScrollPosition from '@app/experiences/hooks/useScrollPosition';
import Link from 'next/link';
import {cExpNavMenuMenu_item, cExpNavMenuMenu_menu} from './ExperiencesNavMenuMenu.styles';

type Props = {
  experiences: CompleteExperienceFromApi[];
  showMenu: boolean;
};

export default function ExperiencesNavMenuMenu({experiences, showMenu}: Props) {
  const currentActive = useScrollPosition();

  return (
    <div className={cExpNavMenuMenu_menu(showMenu)}>
      {experiences.map((experience: CompleteExperienceFromApi, index: number) => {
        return (
          <Link
            href={`#${experience.company}-${experience.id}`}
            key={experience.id}
            className={cExpNavMenuMenu_item(index, currentActive)}
          >
            {experience.company}
          </Link>
        );
      })}
    </div>
  );
}
