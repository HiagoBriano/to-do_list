import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateTask = async (idTask: number, task: string) => {
  try {
    const response = await prisma.task.update({
      where: { id: idTask},
      data: {
        task,
      },
    });

    return response;
  } catch (error) {
    console.log('Error updating task');
    console.log(error);

    throw new Error("");
  }
};

export default updateTask;
