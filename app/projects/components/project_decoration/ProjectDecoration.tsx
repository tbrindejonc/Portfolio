import {
  cProjDecoration_firstOne,
  cProjDecoration_firstThree,
  cProjDecoration_firstTwo,
  cProjDecoration_secondOne,
  cProjDecoration_secondThree,
  cProjDecoration_secondTwo,
  cProjDecoration_thirdOne,
  cProjDecoration_thirdThree,
  cProjDecoration_thirdTwo,
} from './ProjectDecoration.styles';

type Props = {
  index: number;
};

export default function ProjectDecoration({index}: Props) {
  switch (index) {
    case 0:
      return (
        <div className={cProjDecoration_firstOne}>
          <div className={cProjDecoration_firstTwo} />
          <div className={cProjDecoration_firstThree} />
        </div>
      );

    case 1:
      return (
        <div className={cProjDecoration_secondOne}>
          <div className={cProjDecoration_secondTwo} />
          <div className={cProjDecoration_secondThree} />
        </div>
      );

    case 2:
      return (
        <div className={cProjDecoration_thirdOne}>
          <div className={cProjDecoration_thirdTwo} />
          <div className={cProjDecoration_thirdThree} />
        </div>
      );

    case 3:
      return <div className={cProjDecoration_firstOne} />;

    default:
      return <div className={cProjDecoration_firstOne} />;
  }
}
