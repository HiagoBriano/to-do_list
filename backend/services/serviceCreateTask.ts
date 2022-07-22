import createTask from '../models/createTask';

const serviceCreateTask = async (id: number, task: string, status: string) => {
  const createdTask = await createTask.createTask(task, status, id);
  return createdTask;
};

export default serviceCreateTask;
