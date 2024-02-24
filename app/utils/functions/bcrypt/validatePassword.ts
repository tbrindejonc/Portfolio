import bcrypt from 'bcrypt';
import {MSG_ENV_NOT_DEFINED} from '@constants/api';

/**
 * Compare hashed password with provided password
 *
 * @param {string} password provided password
 * @param {string} hashedPassword hashed password
 *
 * @return {Promise<boolean>} a promise containing the result of the comparison
 */
const validatePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  // verify that the BCRYPT_SALT environment variable is set
  if (!process.env.BCRYPT_SALT) {
    throw new Error(`${MSG_ENV_NOT_DEFINED} BCRYPT_SALT`);
  }

  // add custom salt to the password
  const toDecode = process.env.BCRYPT_SALT + password;

  // compare the hashed password with the provided password
  return await bcrypt.compare(toDecode, hashedPassword);
};

export default validatePassword;
