import {cProjDecoration_decoration} from './ProjectDecoration.styles';

type Props = {
  index: number;
};

export default function ProjectDecoration({index}: Props) {
  return <div className={cProjDecoration_decoration} />;
}
