import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const consultUserByEmail = async (email: string) => {
  try {
    const createdUser = await prisma.user.findUnique({
      where: { email: email },
      select: { id: true, name: true, email: true, createIn: true },
    });
    return createdUser || 'Unregistered E-mail';
  } catch (error) {
    console.log('consulta e-mail');
    console.log(error);
  }
};

export default consultUserByEmail;
