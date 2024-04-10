import {css} from '@/styled-system/css';
import {Slide} from '@appTypes/portfolio';

type Props = {
  index: number;
  currentActive: number;
  slide: Slide;
};

export default function ExperiencesSidebarItem({index, currentActive, slide}: Props) {
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

  return <div className={`${cExpSidebar_sidebarItem} ${cExpSidebar_sidebarItemActive(index, currentActive)}`} />;
}
