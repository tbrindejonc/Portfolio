'use client';

import useExperiences from '@app/experiences/hooks/useExperiences';

export default function ExperiencesView() {
  const {data, isLoading} = useExperiences();

  if (!isLoading && data) {
    console.log(data);
  }

  return (
    <div>
      <h1>Experiences</h1>
      <p>Work experiences</p>
    </div>
  );
}
