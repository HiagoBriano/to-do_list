import { NextFunction, Request, Response } from 'express';
import serviceUpadate from '../services/serviceUpadate';

const controllerUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idTask, task, status } = req.body;

    const uptadeResponse = await serviceUpadate(+idTask, task || status);
    return res.status(200).json(uptadeResponse);
  } catch (error) {
    next(error);
  }
};

export default controllerUpdate;
