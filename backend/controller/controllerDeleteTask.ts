import { NextFunction, Request, Response } from 'express';
import serviceDeleteTask from '../services/serviceDeleteTask';

const controllerDeleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idTask } = req.body;
    await serviceDeleteTask(+idTask);
    return res.status(200).json({ message: 'task removed' });
  } catch (error) {
    next(error);
  }
};

export default controllerDeleteTask;
