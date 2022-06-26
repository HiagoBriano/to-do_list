import consultUserByEmail from '../models/consultUserByEmail';
import createTask from '../models/createTask';

const serviceCreateTask = async (
  email: string,
  task: string,
  status: string
) => {
  const userData = await consultUserByEmail(email);
  if (userData) {
    const createdTask = await createTask(task, status, userData.id);
    return createdTask;
  }
};

export default serviceCreateTask;
