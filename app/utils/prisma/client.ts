import {PrismaClient} from '@prisma/client';

// create singleton prisma client
const prisma = new PrismaClient();

export default prisma;
