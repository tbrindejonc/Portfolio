import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import Link from 'next/link';
import {cExpNavMenuMenu_item, cExpNavMenuMenu_menu} from './ExperiencesNavMenuMenu.styles';

type Props = {
  experiences: CompleteExperienceFromApi[];
  showMenu: boolean;
  currentActive: number;
};

export default function ExperiencesNavMenuMenu({experiences, showMenu, currentActive}: Props) {
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
