import {css} from '@/styled-system/css';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

type Props = {
  index: number;
  currentActive: number;
  exp: CompleteExperienceFromApi;
};

export default function ExperiencesSidebarItem({index, currentActive, exp}: Props) {
  const cExpSidebarItem_item = css({
    borderRadius: 'xl',
    cursor: 'pointer',
    h: '15vh',
    position: 'relative',
    transition: 'all 0.5s',
    w: 4,
  });

  const cExpSidebarItem_activeState = (index: number, currentActive: number) => {
    const isActive = index === currentActive;

    return css({
      bg: {
        base: isActive ? 'p_blue.700' : 'neutral.200',
        _dark: isActive ? 'p_blue.200' : 'neutral.700',
      },
      color: {
        base: isActive ? 'neutral.light' : 'neutral.700',
        _dark: isActive ? 'neutral.dark' : 'neutral.light',
      },
      transition: 'all 0.5s',
    });
  };

  const cExpSidebarItem_title = (index: number, currentActive: number) => {
    const isActive = index === currentActive;

    return css({
      bg: {
        base: isActive ? 'p_blue.700' : 'neutral.200',
        _dark: isActive ? 'p_blue.200' : 'neutral.700',
      },
      borderRadius: 'lg',
      display: {
        base: 'none',
        _groupHover: 'block',
      },
      minW: 40,
      p: 2,
      ps: 6,
      position: 'absolute',
      right: 8,
      top: '35%',
      transition: 'all 0.3s',
    });
  };

  return (
    <div className={`group ${cExpSidebarItem_item} ${cExpSidebarItem_activeState(index, currentActive)}`}>
      <h2 className={cExpSidebarItem_title(index, currentActive)}>{exp.company}</h2>
    </div>
  );
}
