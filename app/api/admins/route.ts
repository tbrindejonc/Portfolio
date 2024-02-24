import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {Admin, AdminFromDatabase} from '@schemas/api/admin/admin.schema';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {HTTP_CREATED} from '@constants/api';
import {Credentials, credentialsValidator} from '@schemas/api/admin/credentials.schema';
import formatAdminForApi from '@functions/api/admin/formatAdminForApi';
import encryptPassword from '@functions/bcrypt/encryptPassword';

/**
 * Get all admins
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the collection of admins in json format
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const admins: AdminFromDatabase[] = await prisma.admin.findMany();

    const adminsToReturn: Admin[] = admins.map((admin: AdminFromDatabase) => {
      return formatAdminForApi(admin);
    });

    return sendCollectionResponse<Admin>(adminsToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Create a new admin
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the created admin in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Credentials = await credentialsValidator.validate(body);

    const hashedPassword: string = await encryptPassword(parsedBody.password);

    const admin: AdminFromDatabase = await prisma.admin.create({
      data: {
        email: parsedBody.email,
        password: hashedPassword,
      },
    });

    const adminToReturn: Admin = formatAdminForApi(admin);

    return sendJsonResponse<Admin>(adminToReturn, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
