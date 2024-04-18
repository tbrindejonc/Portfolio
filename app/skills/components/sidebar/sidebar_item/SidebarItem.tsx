import {ReactNode} from 'react';
import {
  cSkillSidebarItem_active,
  cSkillSidebarItem_circle,
  cSkillSidebarItem_item,
  cSkillSidebarItem_tooltip,
} from './SidebarItem.styles';
import Link from 'next/link';

type Props = {
  currentActive: number;
  index: number;
  children: ReactNode;
  techName: string;
  link: string;
};

export default function SidebarItem({currentActive, index, children, techName, link}: Props) {
  return (
    <Link href={link} className={`group ${cSkillSidebarItem_item} ${cSkillSidebarItem_active(index, currentActive)}`}>
      <div className={`${cSkillSidebarItem_circle} ${cSkillSidebarItem_active(index, currentActive)}`}>{children}</div>
      <h2 className={cSkillSidebarItem_tooltip(index, currentActive)}>{techName}</h2>
    </Link>
  );
}
