import prismaClient from './prismaClient';

const createTask = async (task: string, status: string, authorId: number) => {
  try {
    const createdUser = await prismaClient.task.create({
      data: { task, status, authorId },
    });

    return createdUser;
  } catch (error) {
    console.log('Error creating new task');
    console.log(error);
    throw new Error('');
  }
};

export default { createTask };
