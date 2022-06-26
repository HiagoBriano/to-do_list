import { NextFunction, Request, Response } from 'express';

const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ message: 'Sending the task is mandatory' });
  }

  next();
};

export default validateTask;
