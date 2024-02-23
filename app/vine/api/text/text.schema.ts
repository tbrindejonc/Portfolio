import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';
import {linksSchema} from '@schemas/api/links/links.schema';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// base text
const textSchema = vine.object({
  english: vine.string(),
  french: vine.string(),
});

// text returned by api
const textFromApiSchema = vine.object({
  ...textSchema.getProperties(),
  id: vine.number(),
  links: linksSchema.clone(),
});

// text returned when deleted
const textWhenDeletedSchema = vine.object({
  ...textSchema.getProperties(),
  id: vine.number(),
});

// text for other schemas
export const textForOthersSchema = vine.object({
  ...textSchema.getProperties(),
  id: vine.number(),
});

// text for creation or update
export const textUpsertSchema = vine.object({
  ...textSchema.getProperties(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for base text
export type Text = Infer<typeof textSchema>;

// type for text returned by api
export type TextFromApi = Infer<typeof textFromApiSchema>;

// type for text returned when deleted
export type TextWhenDeleted = Infer<typeof textWhenDeletedSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for base text
export const textValidator = vine.compile(textSchema);

// validator for text returned by api
export const textFromApiValidator = vine.compile(textFromApiSchema);

// validator for text returned when deleted
export const textWhenDeletedValidator = vine.compile(textWhenDeletedSchema);
