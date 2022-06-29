import { Request, Response } from 'express';
import serviceUpadate from '../services/serviceUpadate';

const controllerUpdate = async (req: Request, res: Response) => {
  const { idTask, task, status } = req.body;

  const uptadeResponse = await serviceUpadate(+idTask, task || status )
  return res.status(200).json(uptadeResponse);
};

export default controllerUpdate;
