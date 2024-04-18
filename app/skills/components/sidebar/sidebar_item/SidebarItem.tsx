import {ReactNode} from 'react';
import {cSkillSidebarItem_active, cSkillSidebarItem_circle, cSkillSidebarItem_item} from './SidebarItem.styles';

type Props = {
  currentActive: number;
  index: number;
  children: ReactNode;
};

export default function SidebarItem({currentActive, index, children}: Props) {
  return (
    <div className={`${cSkillSidebarItem_item} ${cSkillSidebarItem_active(index, currentActive)}`}>
      <div className={`${cSkillSidebarItem_circle} ${cSkillSidebarItem_active(index, currentActive)}`}>{children}</div>
    </div>
  );
}
