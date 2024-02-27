import {
  CompleteExperienceFromApi,
  CompleteExperienceFromDatabase,
  ExperienceFromApi,
  ExperienceFromDatabase,
  ExperienceWhenDeleted,
} from '@schemas/api/experience/experience.schema';

/**
 * Format an experience for the api return
 *
 * @param {ExperienceFromDatabase | CompleteExperienceFromDatabase} experience the experience to format
 * @param {boolean} isDeleted if the experience is deleted
 * @param {boolean} isFull if the experience is complete
 *
 * @returns {ExperienceFromApi | ExperienceWhenDeleted | CompleteExperienceFromApi} the formatted experience
 */
const formatExperienceForApi = (
  experience: ExperienceFromDatabase | CompleteExperienceFromDatabase,
  isDeleted: boolean = false,
  isFull: boolean = false,
): ExperienceFromApi | ExperienceWhenDeleted | CompleteExperienceFromApi => {
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

  if (isFull && 'description' in experience) {
    return {
      company: experience.company,
      description: {
        english: experience.description.english,
        french: experience.description.french,
        id: experience.description.id,
      },
      end_date: experience.end_date,
      id: experience.id,
      job_description: {
        english: experience.job_description.english,
        french: experience.job_description.french,
        id: experience.job_description.id,
      },
      job_title: {
        english: experience.job_title.english,
        french: experience.job_title.french,
        id: experience.job_title.id,
      },
      logo: experience.logo,
      start_date: experience.start_date,
      technologies: experience.Experience_Technologies.map((association) => {
        return {
          category_id: association.technology.category_id,
          color: association.technology.color,
          description_id: association.technology.description_id,
          id: association.technology.id,
          logo: association.technology.logo,
          name: association.technology.name,
        };
      }),
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
    } as CompleteExperienceFromApi;
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
