import { prismaClient } from "./prismaClient";

const deleteTask = async (idTask: number) => {
  try {
    await prismaClient.task.delete({
      where: { id: idTask },
    });

    return 'done';
  } catch (error) {
    console.log('Error deleting task');
    console.log(error);

    throw new Error('');
  }
};

export default deleteTask;
