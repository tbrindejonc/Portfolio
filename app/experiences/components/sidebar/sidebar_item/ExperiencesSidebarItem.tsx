import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import Link from 'next/link';
import {
  cExpSidebarItem_activeState,
  cExpSidebarItem_item,
  cExpSidebarItem_title,
} from './ExperiencesSidebarItem.styles';

type Props = {
  index: number;
  currentActive: number;
  exp: CompleteExperienceFromApi;
};

export default function ExperiencesSidebarItem({index, currentActive, exp}: Props) {
  return (
    <Link
      href={`#${exp.company}-${exp.id}`}
      className={`group ${cExpSidebarItem_item} ${cExpSidebarItem_activeState(index, currentActive)}`}
    >
      <h2 className={cExpSidebarItem_title(index, currentActive)}>{exp.company}</h2>
    </Link>
  );
}
