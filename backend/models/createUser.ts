import { prismaClient } from './prismaClient';

const createUser = async (name: string, email: string, password: string) => {
  try {
    const createdUser = await prismaClient.user.create({
      data: { name, email, password },
      select: { id: true, name: true, email: true, createIn: true },
    });

    return createdUser;
  } catch (error) {
    console.log('Error creating new user');
    console.log(error);
    throw new Error('');
  }
};

export default createUser;
