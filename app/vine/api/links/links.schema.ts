import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// base link schema
const baseLinkSchema = vine.object({
  href: vine.string(),
  method: vine.string(),
});

// links for any simple resource from api
export const linksSchema = vine.object({
  self: baseLinkSchema.clone(),
  update: baseLinkSchema.clone(),
  delete: baseLinkSchema.clone(),
});

// links for a category resource
export const linksForCategorySchema = vine.object({
  ...linksSchema.getProperties(),
  name: baseLinkSchema.clone(),
  logo: baseLinkSchema.clone(),
});

// links for an experience resource
export const linksForExperienceSchema = vine.object({
  ...linksSchema.getProperties(),
  description: baseLinkSchema.clone(),
  job_title: baseLinkSchema.clone(),
  logo: baseLinkSchema.clone(),
});

// links for an association between a technology and an experience
export const technologyExperienceAssociationLinksSchema = vine.object({
  experience: baseLinkSchema.clone(),
  technology: baseLinkSchema.clone(),
});

// links for a project resource
export const linksForProjectSchema = vine.object({
  ...linksSchema.getProperties(),
  gif: baseLinkSchema.clone(),
  description: baseLinkSchema.clone(),
});

// links for an association between a technology and a project
export const technologyProjectAssociationLinksSchema = vine.object({
  project: baseLinkSchema.clone(),
  technology: baseLinkSchema.clone(),
});

// links for a technology resource
export const linksForTechnologySchema = vine.object({
  ...linksSchema.getProperties(),
  category: baseLinkSchema.clone(),
  description: baseLinkSchema.clone(),
  logo: baseLinkSchema.clone(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for simple resource links
export type Links = Infer<typeof linksSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator links schema
export const linksValidator = vine.compile(linksSchema);
