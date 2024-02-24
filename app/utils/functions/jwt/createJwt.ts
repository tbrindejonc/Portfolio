import {SignJWT} from 'jose';
import {JWT_ALG, MSG_ENV_NOT_DEFINED} from '@constants/api';
import {AdminFromDatabase} from '@schemas/api/admin/admin.schema';

/**
 * Create a login jwt for the admin
 *
 * @param {AdminFromDatabase} admin admin to create the jwt for
 *
 * @return {Promise<string>} a promise containing the jwt
 */
const createJwt = async (admin: AdminFromDatabase): Promise<string> => {
  if (!process.env.NEXT_PUBLIC_JWT_SECRET) {
    throw new Error(`${MSG_ENV_NOT_DEFINED} NEXT_PUBLIC_JWT_SECRET`);
  }

  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

  const payload = {
    admin: {
      id: admin.id,
      email: admin.email,
    },
  };

  return await new SignJWT(payload)
    .setProtectedHeader({alg: JWT_ALG})
    .setIssuedAt()
    .setIssuer(admin.email)
    .setExpirationTime('1week')
    .sign(secret);
};

export default createJwt;
