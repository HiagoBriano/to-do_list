import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTask = async (task: string, status: string, authorId: number) => {
  try {
    const createdUser = await prisma.task.create({
      data: { task, status, authorId },
    });

    return createdUser;
  } catch (error) {
    console.log('Error creating new task');
    console.log(error);
    throw new Error('');
  }
};

export default createTask;
