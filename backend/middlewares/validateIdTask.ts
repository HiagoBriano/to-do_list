import { NextFunction, Request, Response } from 'express';

const validateIdTask = (req: Request, res: Response, next: NextFunction) => {
  const { idTask } = req.body;

  if (!idTask) {
    return res.status(400).json({ message: 'Sending the idTask is mandatory' });
  }

  next();
};

export default validateIdTask;
