import {
  ExperienceFromApi,
  ExperienceFromDatabase,
  ExperienceWhenDeleted,
} from '@schemas/api/experience/experience.schema';

/**
 * Format an experience for the api return
 *
 * @param {ExperienceFromDatabase} experience the experience to format
 * @param {boolean} isDeleted if the experience is deleted
 *
 * @returns {ExperienceFromApi | ExperienceWhenDeleted} the formatted experience
 */
const formatExperienceForApi = (
  experience: ExperienceFromDatabase,
  isDeleted: boolean = false,
): ExperienceFromApi | ExperienceWhenDeleted => {
  if (isDeleted) {
    return {
      company: experience.company,
      description_id: experience.description_id,
      end_date: experience.end_date,
      id: experience.id,
      job_description_id: experience.job_description_id,
      job_title_id: experience.job_title_id,
      logo: experience.logo,
      start_date: experience.start_date,
    } as ExperienceWhenDeleted;
  }

  return {
    company: experience.company,
    description_id: experience.description_id,
    end_date: experience.end_date,
    id: experience.id,
    job_description_id: experience.job_description_id,
    job_title_id: experience.job_title_id,
    logo: experience.logo,
    start_date: experience.start_date,
    links: {
      self: {
        method: 'GET',
        href: `/api/experiences/${experience.id}`,
      },
      update: {
        method: 'PUT',
        href: `/api/experiences/${experience.id}`,
      },
      delete: {
        method: 'DELETE',
        href: `/api/experiences/${experience.id}`,
      },
      description: {
        method: 'GET',
        href: `/api/texts/${experience.description_id}`,
      },
      job_title: {
        method: 'GET',
        href: `/api/texts/${experience.job_title_id}`,
      },
      job_description: {
        method: 'GET',
        href: `/api/texts/${experience.job_description_id}`,
      },
    },
  } as ExperienceFromApi;
};

export default formatExperienceForApi;
