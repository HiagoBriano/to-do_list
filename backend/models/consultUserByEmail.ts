import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const consultUserByEmail = async (email: string) => {
  try {
    const createdUser = await prisma.user.findUnique({
      where: { email }
    });
    return createdUser || 'Unregistered E-mail';
  } catch (error) {
    console.log('Error querying email');
    console.log(error);
  }
};

export default consultUserByEmail;