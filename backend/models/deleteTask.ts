import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteTask = async (idTask: number) => {
  try {
    await prisma.task.delete({
      where: { id: idTask },
    });

    return 'done';
  } catch (error) {
    console.log('Error deleting task');
    console.log(error);
  }
};

export default deleteTask;
