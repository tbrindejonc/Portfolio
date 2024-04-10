import {css} from '@/styled-system/css';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

type Props = {
  index: number;
  currentActive: number;
  exp: CompleteExperienceFromApi;
};

export default function ExperiencesSidebarItem({index, currentActive, exp}: Props) {
  const cExpSidebar_sidebarItem = css({
    borderRadius: 'xl',
    h: '15vh',
    transition: 'all 0.5s',
    w: 4,
  });

  const cExpSidebar_sidebarItemActive = (index: number, currentActive: number) => {
    const isActive = index === currentActive;

    return css({
      bg: {
        base: isActive ? 'p_blue.700' : 'neutral.200',
        _dark: isActive ? 'p_blue.200' : 'neutral.700',
      },
    });
  };

  return (
    <div className={`${cExpSidebar_sidebarItem} ${cExpSidebar_sidebarItemActive(index, currentActive)}`}>
      <h2>{exp.company}</h2>
    </div>
  );
}
