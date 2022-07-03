import { prismaClient } from './prismaClient';

const consultUserByEmail = async (email: string) => {
  try {
    const createdUser = await prismaClient.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    return createdUser;
  } catch (error) {
    console.log('Error querying email');
    console.log(error);
    throw new Error('');
  }
};

export default consultUserByEmail;
