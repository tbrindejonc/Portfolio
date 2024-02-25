import {MSG_ENV_NOT_DEFINED, SALT_ROUNDS} from '@constants/api';
import * as bcrypt from 'bcrypt';

/**
 * Encrypt the password with bcrypt
 *
 * @param {string} password the password to hash
 *
 * @return {Promise<string>} a promise containing the hashed password
 */
const encryptPassword = async (password: string): Promise<string> => {
  if (!process.env.BCRYPT_SALT) {
    throw new Error(`${MSG_ENV_NOT_DEFINED} BCRYPT_SALT`);
  }

  // add custom salt to the password
  const toHash = process.env.BCRYPT_SALT + password;

  return await bcrypt.hash(toHash, SALT_ROUNDS);
};

export default encryptPassword;
