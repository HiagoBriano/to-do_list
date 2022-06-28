import { Request, Response } from 'express';
import serviceDeleteTask from '../services/serviceDeleteTask';

const controllerDeleteTask = async (req: Request, res: Response) => {
  const { idTask } = req.body;
  await serviceDeleteTask(+idTask);
  return res.status(200).json({ message: 'task removed' });
};

export default controllerDeleteTask;
