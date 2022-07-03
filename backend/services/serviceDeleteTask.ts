import deleteTask from '../models/deleteTask';

const serviceDeleteTask = async (idTask: number) => {
  return await deleteTask(idTask);
};

export default serviceDeleteTask;
