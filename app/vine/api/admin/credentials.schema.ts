import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// admin credentials for login
const credentialsSchema = vine.object({
  email: vine.string().email(),
  password: vine.string(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for admin credentials
export type Credentials = Infer<typeof credentialsSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for admin credentials
export const credentialsValidator = vine.compile(credentialsSchema);
