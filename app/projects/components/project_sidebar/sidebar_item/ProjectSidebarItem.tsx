import Link from 'next/link';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import {cProjSidebarItem_activeState, cProjSidebarItem_item, cProjSidebarItem_title} from './ProjectSidebarItem.styles';

type Props = {
  index: number;
  currentActive: number;
  project: CompleteProjectFromApi;
};

export default function ProjectSidebarItem({index, currentActive, project}: Props) {
  return (
    <Link
      href={`#${project.name}`}
      className={`group ${cProjSidebarItem_item} ${cProjSidebarItem_activeState(index, currentActive)}`}
    >
      <h2 className={cProjSidebarItem_title(index, currentActive)}>{project.name}</h2>
    </Link>
  );
}
