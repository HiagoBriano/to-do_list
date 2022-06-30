import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const teste = prisma.user;

const consultUserByEmail = async (email: string) => {
  try {
    const createdUser = await teste.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true
      }
    });
    
    return createdUser;
  } catch (error) {
    console.log('Error querying email');
    console.log(error);
    throw new Error("");
  }
};

export default consultUserByEmail;
