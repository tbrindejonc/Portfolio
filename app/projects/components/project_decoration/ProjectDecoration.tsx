import {
  cProjDecoration_firstOne,
  cProjDecoration_firstThree,
  cProjDecoration_firstTwo,
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
      return <div className={cProjDecoration_firstOne} />;

    case 2:
      return <div className={cProjDecoration_firstOne} />;

    case 3:
      return <div className={cProjDecoration_firstOne} />;

    default:
      return <div className={cProjDecoration_firstOne} />;
  }
}
