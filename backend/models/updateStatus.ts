import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateStatus = async (idTask: number, status: string) => {
  try {
    const response = await prisma.task.update({
      where: { id: idTask },
      data: {
        status,
      },
    });

    return response;
  } catch (error) {
    console.log('Error updating task');
    console.log(error);

    throw new Error('');
  }
};

export default updateStatus;
