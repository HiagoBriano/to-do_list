import { Request, Response } from 'express';
import { readToken } from '../services/safety';
import serviceFetchTasks from '../services/serviceFetchTasks';

const controllerFetchTasks = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const tokenData = readToken(token || "invalid");
  if (tokenData) {
    const taskSurveyResponse = await serviceFetchTasks(tokenData.id);
    return res.status(200).json(taskSurveyResponse);
  }
 };

export default controllerFetchTasks;