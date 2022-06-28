import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchTasks = async (id: number) => {
  try {
    const taskSearchReturn = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        Task: {
          select: {
            id: true,
            task: true,
            status: true,
            createIn: true,
            updatedAt: true,
          },
        },
      },
    });
    
    return taskSearchReturn;
  } catch (error) {
    console.log('Error fetching tasks');
    console.log(error);
  }
};


export default fetchTasks;
