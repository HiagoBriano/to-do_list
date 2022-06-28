import { Router } from 'express';
import controllerCreateTask from '../controller/controllerCreateTask';
import controllerDeleteTask from '../controller/controllerDeleteTask';
import controllerFetchTasks from '../controller/controllerFetchTasks';
import validateIdTask from '../middlewares/validateIdTask';
import validateStatus from '../middlewares/validateStatus';
import validateTask from '../middlewares/validateTask';
import validateToken from '../middlewares/validateToken';

const routerTask = Router();

routerTask
  .route('/')
  .get(validateToken, controllerFetchTasks)
  .post(validateToken, validateTask, validateStatus, controllerCreateTask)
  .delete(validateToken, validateIdTask, controllerDeleteTask);
export default routerTask;
