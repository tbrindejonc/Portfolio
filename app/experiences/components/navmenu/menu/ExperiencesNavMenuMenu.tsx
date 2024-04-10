import {vstack} from '@/styled-system/patterns';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

type Props = {
  experiences: CompleteExperienceFromApi[];
};

export default function ExperiencesNavMenuMenu({experiences}: Props) {
  const cExpNavMenuMenu_menu = vstack({
    gap: 0,
    borderRadius: 'lg',
    me: 2,
  });

  const cExpNavMenuMenu_item = (index: number) => {
    const isActive = false;

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
    });
  };

  return (
    <div className={cExpNavMenuMenu_menu}>
      <div className={cExpNavMenuMenu_item(0)}>RhinoTerrain</div>
      <div className={cExpNavMenuMenu_item(1)}>Gibraltaz</div>
      <div className={cExpNavMenuMenu_item(2)}>Gibraltaz</div>
    </div>
  );
}
