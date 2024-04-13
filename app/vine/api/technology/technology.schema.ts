import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';
import {linksForTechnologySchema} from '@schemas/api/links/links.schema';
import {textForOthersSchema, textUpsertSchema} from '@schemas/api/text/text.schema';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// base for other project schemas
const baseTechnologySchema = vine.object({
  color: vine.string(),
  logo: vine.string(),
  name: vine.string(),
  website: vine.string(),
});

// technology returned by api
const technologyFromApiSchema = vine.object({
  ...baseTechnologySchema.getProperties(),
  category_id: vine.number(),
  description_id: vine.number(),
  id: vine.number(),
  links: linksForTechnologySchema.clone(),
});

// complete technology returned by api
const completeTechnologyFromApiSchema = vine.object({
  ...baseTechnologySchema.getProperties(),
  category: vine.object({
    id: vine.number(),
    logo: vine.string(),
    name: vine.object({
      english: vine.string(),
      french: vine.string(),
      id: vine.number(),
    }),
  }),
  description: textForOthersSchema.clone(),
  id: vine.number(),
  links: linksForTechnologySchema.clone(),
});

// technology for creation or update
const technologyUpsertSchema = vine.object({
  ...baseTechnologySchema.getProperties(),
  category_id: vine.number(),
  description: textUpsertSchema.clone(),
});

// technology when deleted
const technologyWhenDeletedSchema = vine.object({
  ...baseTechnologySchema.getProperties(),
  category_id: vine.number(),
  description_id: vine.number(),
  id: vine.number(),
});

// technology for others schemas
export const technologyForOthersSchema = vine.object({
  ...baseTechnologySchema.getProperties(),
  category_id: vine.number(),
  description_id: vine.number(),
  id: vine.number(),
});

// technology returned by database
const technologyFromDatabaseSchema = vine.object({
  ...baseTechnologySchema.getProperties(),
  category_id: vine.number(),
  description_id: vine.number(),
  id: vine.number(),
});

// complete technology returned by database
const completeTechnologyFromDatabaseSchema = vine.object({
  ...baseTechnologySchema.getProperties(),
  category_id: vine.number(),
  description_id: vine.number(),
  category: vine.object({
    id: vine.number(),
    logo: vine.string(),
    name: vine.object({
      english: vine.string(),
      french: vine.string(),
      id: vine.number(),
    }),
  }),
  description: textForOthersSchema.clone(),
  id: vine.number(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for technology returned by api
export type TechnologyFromApi = Infer<typeof technologyFromApiSchema>;

// type for complete technology returned by api
export type CompleteTechnologyFromApi = Infer<typeof completeTechnologyFromApiSchema>;

// type for technology for creation or update
export type TechnologyUpsert = Infer<typeof technologyUpsertSchema>;

// type for technology when deleted
export type TechnologyWhenDeleted = Infer<typeof technologyWhenDeletedSchema>;

// type for technology returned by database
export type TechnologyFromDatabase = Infer<typeof technologyFromDatabaseSchema>;

// type for complete technology returned by database
export type CompleteTechnologyFromDatabase = Infer<typeof completeTechnologyFromDatabaseSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for technology returned by api
export const technologyFromApiValidator = vine.compile(technologyFromApiSchema);

// validator for complete technology returned by api
export const completeTechnologyFromApiValidator = vine.compile(completeTechnologyFromApiSchema);

// validator for technology for creation or update
export const technologyUpsertValidator = vine.compile(technologyUpsertSchema);

// validator for technology when deleted
export const technologyWhenDeletedValidator = vine.compile(technologyWhenDeletedSchema);
