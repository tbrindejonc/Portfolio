import {vstack} from '@/styled-system/patterns';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import useScrollPosition from '@app/experiences/hooks/useScrollPosition';
import Link from 'next/link';

type Props = {
  experiences: CompleteExperienceFromApi[];
  showMenu: boolean;
};

export default function ExperiencesNavMenuMenu({experiences, showMenu}: Props) {
  const currentActive = useScrollPosition();

  const cExpNavMenuMenu_menu = vstack({
    gap: 0,
    borderRadius: 'lg',
    me: 2,
    translateX: showMenu ? '0' : '110%',
    translate: 'auto',
    transition: 'all 0.5s',
  });

  const cExpNavMenuMenu_item = (index: number, currentActive: number) => {
    const isActive = index === currentActive;

    return vstack({
      bg: {
        base: isActive ? 'p_blue.700' : 'neutral.200',
        _dark: isActive ? 'p_blue.200' : 'neutral.700',
      },
      color: {
        base: isActive ? 'neutral.light' : 'neutral.700',
        _dark: isActive ? 'neutral.dark' : 'neutral.light',
      },
      h: 32,
      w: 52,
      alignItems: 'start',
      justifyContent: 'center',
      ps: 10,
      borderTop: index !== 0 ? '3px solid' : 'none',
      borderColor: 'p_blue.dark',
      fontSize: 'xl',
      fontFamily: 'bricolage',
      borderTopRadius: index === 0 ? 'lg' : 'none',
      borderBottomRadius: index === 2 ? 'lg' : 'none',
      transition: 'all 0.3s',
      pointerEvents: 'auto',
    });
  };

  return (
    <div className={cExpNavMenuMenu_menu}>
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
