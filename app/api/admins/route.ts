import sendErrorResponse from '@functions/api/sendErrorResponse';
import prisma from '@utils/prisma/client';
import {Admin, AdminFromDatabase} from '@schemas/api/admin/admin.schema';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';

export async function GET(request: Request) {
  try {
    const admins: AdminFromDatabase[] = await prisma.admin.findMany();

    const adminsToReturn: Admin[] = admins.map((admin: AdminFromDatabase) => {
      return {
        email: admin.email,
        id: admin.id,
        links: {
          self: {
            method: 'GET',
            href: `/admins/${admin.id}`,
          },
          update: {
            method: 'PUT',
            href: `/admins/${admin.id}`,
          },
          delete: {
            method: 'DELETE',
            href: `/admins/${admin.id}`,
          },
        },
      };
    });

    return sendCollectionResponse<Admin>(adminsToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
