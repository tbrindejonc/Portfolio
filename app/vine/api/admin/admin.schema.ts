import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';
import {linksSchema} from '@schemas/api/links/links.schema';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// admin returned by api
const adminSchema = vine.object({
  email: vine.string().email(),
  id: vine.number(),
  links: linksSchema.clone(),
});

// admin when deleted
const adminWhenDeletedSchema = vine.object({
  email: vine.string().email(),
  id: vine.number(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for admin returned by api
export type Admin = Infer<typeof adminSchema>;

// type for admin when deleted
export type AdminWhenDeleted = Infer<typeof adminWhenDeletedSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for admin returned by api
export const adminValidator = vine.compile(adminSchema);

// validator for admin when deleted
export const adminWhenDeletedValidator = vine.compile(adminWhenDeletedSchema);
