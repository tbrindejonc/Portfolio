import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

type Props = {
  experience: CompleteExperienceFromApi;
  isLoading: boolean;
};

export default function ExperienceFactory({experience, isLoading}: Props) {
  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{experience.company}</h1>
    </div>
  );
}
