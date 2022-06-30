import updateStatus from '../models/updateTask';

const serviceUpadate = async (idTask: number, task: string, status: string) => {
  const updatedStatus = await updateStatus(idTask, task, status);
  return updatedStatus;
};

export default serviceUpadate;
