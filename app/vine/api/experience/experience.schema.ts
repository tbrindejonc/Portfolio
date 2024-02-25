import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';
import {linksForExperienceSchema, technologyExperienceAssociationLinksSchema} from '@schemas/api/links/links.schema';
import {textForOthersSchema} from '@schemas/api/text/text.schema';
import {technologyForOthersSchema} from '@schemas/api/technology/technology.schema';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// base experience
const baseExperienceSchema = vine.object({
  company: vine.string(),
  end_date: vine.date(),
  logo: vine.string(),
  start_date: vine.date(),
});

// experience returned by api
const experienceFromApiSchema = vine.object({
  ...baseExperienceSchema.getProperties(),
  description_id: vine.number(),
  id: vine.number(),
  job_title_id: vine.number(),
  links: linksForExperienceSchema.clone(),
});

// complete experience returned by api
const completeExperienceFromApiSchema = vine.object({
  ...baseExperienceSchema.getProperties(),
  description: textForOthersSchema.clone(),
  id: vine.number(),
  job_title: textForOthersSchema.clone(),
  technologies: vine.array(technologyForOthersSchema.clone()),
  links: linksForExperienceSchema.clone(),
});

// experience for creation or update
const experienceUpsertSchema = vine.object({
  ...baseExperienceSchema.getProperties(),
  description_id: vine.number(),
  job_title_id: vine.number(),
});

// experience when deleted
const experienceWhenDeletedSchema = vine.object({
  ...baseExperienceSchema.getProperties(),
  description_id: vine.number(),
  id: vine.number(),
  job_title_id: vine.number(),
});

// association between a technology and an experience returned by api
const experienceTechnologyAssociationSchema = vine.object({
  experience_id: vine.number(),
  technology_id: vine.number(),
  links: technologyExperienceAssociationLinksSchema.clone(),
});

// experience returned by database
const experienceFromDatabaseSchema = vine.object({
  ...baseExperienceSchema.getProperties(),
  description_id: vine.number(),
  id: vine.number(),
  job_title_id: vine.number(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// experience returned by api
export type ExperienceFromApi = Infer<typeof experienceFromApiSchema>;

// complete experience returned by api
export type CompleteExperienceFromApi = Infer<typeof completeExperienceFromApiSchema>;

// experience for creation or update
export type ExperienceUpsert = Infer<typeof experienceUpsertSchema>;

// experience when deleted
export type ExperienceWhenDeleted = Infer<typeof experienceWhenDeletedSchema>;

// association between a technology and an experience returned by api
export type ExperienceTechnologyAssociation = Infer<typeof experienceTechnologyAssociationSchema>;

// experience returned by database
export type ExperienceFromDatabase = Infer<typeof experienceFromDatabaseSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for experience returned by api
export const experienceFromApiValidator = vine.compile(experienceFromApiSchema);

// validator for complete experience returned by api
export const completeExperienceFromApiValidator = vine.compile(completeExperienceFromApiSchema);

// validator for experience for creation or update
export const experienceUpsertValidator = vine.compile(experienceUpsertSchema);

// validator for experience when deleted
export const experienceWhenDeletedValidator = vine.compile(experienceWhenDeletedSchema);

// validator for association between a technology and an experience returned by api
export const experienceTechnologyAssociationValidator = vine.compile(experienceTechnologyAssociationSchema);
