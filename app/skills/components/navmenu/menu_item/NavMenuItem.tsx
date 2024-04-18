import sidebarLinks from '@app/skills/texts/sidebarLinks';
import {
  cSkillNavMenu_item,
  cSkillNavMenu_step,
  cSkillNavMenu_text,
  cSkillNavMenu_textContainer,
} from './NavMenuItem.styles';
import Link from 'next/link';
import {ReactNode} from 'react';
import {Language} from '@appTypes/portfolio';

type Props = {
  currentActive: number;
  index: number;
  toggleMenu: () => void;
  children: ReactNode;
  language: Language;
};

export default function NavMenuItem({currentActive, toggleMenu, index, children, language}: Props) {
  return (
    <Link href={sidebarLinks.links[index]} className={cSkillNavMenu_item(index, currentActive)} onClick={toggleMenu}>
      <div className={cSkillNavMenu_step(index, currentActive)} />
      <div className={cSkillNavMenu_textContainer}>
        {children}
        <h2 className={cSkillNavMenu_text}>{sidebarLinks.titles[index][language]}</h2>
      </div>
    </Link>
  );
}
