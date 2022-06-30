import { NextFunction, Request, Response } from 'express';

const validateUpdate = (req: Request, res: Response, next: NextFunction) => {
  const { idTask, task, status } = req.body;

  if (!idTask) {
    return res.status(400).json({ message: 'Sending the idTask is mandatory' });
  }

  if (task && status) {
    const validStatus = ['done', 'in progress', 'pending'];

    if (!validStatus.includes(status)) {
      return res.status(400).json({
        message: 'invalid status, try done, in progress or pending',
      });
    }

    next();
  } else {
    return res.status(400).json({
      message: 'sending the new "status" and the updated "task" is mandatory',
    });
  }
};

export default validateUpdate;
