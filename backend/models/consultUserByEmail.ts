import prismaClient from './prismaClient';

async function consultUserByEmail(email: string) {
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

export default { consultUserByEmail }
