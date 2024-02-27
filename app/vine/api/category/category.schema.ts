import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';
import {linksForCategorySchema} from '@schemas/api/links/links.schema';
import {textForOthersSchema, textUpsertSchema} from '@schemas/api/text/text.schema';

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
  technologies: vine.array(
    vine.object({
      id: vine.number(),
      name: vine.string(),
      logo: vine.string(),
      color: vine.string(),
      description: textForOthersSchema.clone(),
    }),
  ),
  links: linksForCategorySchema.clone(),
});

// category for creation or update
const categoryUpsertSchema = vine.object({
  logo: vine.string(),
  name: textUpsertSchema.clone(),
});

// category when deleted
const categoryWhenDeletedSchema = vine.object({
  ...baseCategorySchema.getProperties(),
  name_id: vine.number(),
});

// category returned by database
const categoryFromDatabaseSchema = vine.object({
  ...baseCategorySchema.getProperties(),
  name_id: vine.number(),
});

// complete category returned by database
const completeCategoryFromDatabaseSchema = vine.object({
  ...baseCategorySchema.getProperties(),
  name_id: vine.number(),
  name: textForOthersSchema.clone(),
  technologies: vine.array(
    vine.object({
      id: vine.number(),
      name: vine.string(),
      logo: vine.string(),
      color: vine.string(),
      description: textForOthersSchema.clone(),
    }),
  ),
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

// type for category when deleted
export type CategoryWhenDeleted = Infer<typeof categoryWhenDeletedSchema>;

// type for category returned by database
export type CategoryFromDatabase = Infer<typeof categoryFromDatabaseSchema>;

// type for complete category returned by database
export type CompleteCategoryFromDatabase = Infer<typeof completeCategoryFromDatabaseSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for category returned by api
export const categoryFromApiValidator = vine.compile(categoryFromApiSchema);

// validator for complete category returned by api
export const completeCategoryFromApiValidator = vine.compile(completeCategoryFromApiSchema);

// validator for category for creation or update
export const categoryUpsertValidator = vine.compile(categoryUpsertSchema);
