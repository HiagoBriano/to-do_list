import { Request, Response } from 'express';
import { readToken } from '../services/safety';
import serviceCreateTask from '../services/serviceCreateTask';

const controllerCreateTask = async (req: Request, res: Response) => {
  const { task, status } = req.body;
  const token = req.headers.authorization;
  if (token) {
    const responseToken = readToken(token);
    if (responseToken) {
      serviceCreateTask(responseToken.email, task, status);
      return res.status(201).json({ message: 'created task' });
    }
  }
};

export default controllerCreateTask;
