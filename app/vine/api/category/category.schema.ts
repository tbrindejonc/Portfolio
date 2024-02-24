import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';
import {linksForCategorySchema} from '@schemas/api/links/links.schema';
import {textForOthersSchema, textUpsertSchema} from '@schemas/api/text/text.schema';
import {technologyForOthersSchema} from '@schemas/api/technology/technology.schema';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// base for other category schemas
const baseCategorySchema = vine.object({
  id: vine.number(),
  logo: vine.string(),
});

// category returned by api
const categoryFromApiSchema = vine.object({
  ...baseCategorySchema.getProperties(),
  name_id: vine.number(),
  links: linksForCategorySchema.clone(),
});

// complete category returned by api
const completeCategoryFromApiSchema = vine.object({
  ...baseCategorySchema.getProperties(),
  name: textForOthersSchema.clone(),
  technologies: vine.array(technologyForOthersSchema.clone()),
  links: linksForCategorySchema.clone(),
});

// category for creation or update
const categoryUpsertSchema = vine.object({
  logo: vine.string(),
  name: textUpsertSchema.clone(),
});

// category for technology
export const categoryForTechnologySchema = vine.object({
  ...baseCategorySchema.getProperties(),
  name: textForOthersSchema.clone(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for category returned by api
export type CategoryFromApi = Infer<typeof categoryFromApiSchema>;

// type for complete category returned by api
export type CompleteCategoryFromApi = Infer<typeof completeCategoryFromApiSchema>;

// type for category for creation or update
export type CategoryUpsert = Infer<typeof categoryUpsertSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for category returned by api
export const categoryFromApiValidator = vine.compile(categoryFromApiSchema);

// validator for complete category returned by api
export const completeCategoryFromApiValidator = vine.compile(completeCategoryFromApiSchema);

// validator for category for creation or update
export const categoryUpsertValidator = vine.compile(categoryUpsertSchema);
