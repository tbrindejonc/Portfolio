import {
  cTechLoading_button,
  cTechLoading_circle,
  cTechLoading_container,
  cTechLoading_loading,
  cTechLoading_paragraph,
  cTechLoading_title,
} from './TechnologiesLoading.styles';

export default function TechnologiesLoading() {
  const fakeLoading: any[] = new Array(6).fill(null);

  return (
    <div className={cTechLoading_container}>
      {fakeLoading.map((_, index: number) => {
        return (
          <div key={index} className={cTechLoading_loading}>
            <div className={cTechLoading_circle} />
            <div className={cTechLoading_title} />
            <div className={cTechLoading_paragraph} />
            <div className={cTechLoading_button} />
          </div>
        );
      })}
    </div>
  );
}
