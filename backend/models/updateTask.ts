import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateTask = async (idTask: number, task: string, status: string) => {
  try {
    const response = await prisma.task.update({
      where: { id: idTask },
      data: {
        task,
        status,
      },
      select: {
        id: true,
        task: true,
        status: true,
        createIn: true,
        updatedAt: true,
      }
    });

    return response;
  } catch (error) {
    console.log('Error updating task');
    console.log(error);

    throw new Error('');
  }
};

export default updateTask;
