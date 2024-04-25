import {
  cProjDecoration_decoration,
  cProjDecoration_decorationThree,
  cProjDecoration_decorationTwo,
} from './ProjectDecoration.styles';

type Props = {
  index: number;
};

export default function ProjectDecoration({index}: Props) {
  switch (index) {
    case 0:
      return (
        <div className={cProjDecoration_decoration}>
          <div className={cProjDecoration_decorationTwo} />
          <div className={cProjDecoration_decorationThree} />
        </div>
      );

    case 1:
      return <div className={cProjDecoration_decoration} />;

    case 2:
      return <div className={cProjDecoration_decoration} />;

    case 3:
      return <div className={cProjDecoration_decoration} />;

    default:
      return <div className={cProjDecoration_decoration} />;
  }
}
