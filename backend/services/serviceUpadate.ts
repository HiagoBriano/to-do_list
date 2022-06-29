import updateStatus from '../models/updateStatus';
import updateTask from '../models/updateTask';

const serviceUpadate = async (idTask: number, data: string) => {
  const validStatus = ['done', 'in progress', 'pending'];

  if (validStatus.includes(data)) {
    const updatedStatus = await updateStatus(idTask, data);
    return updatedStatus;
  }

  const updatedTask = await updateTask(idTask, data);
  return updatedTask;
};

export default serviceUpadate;
