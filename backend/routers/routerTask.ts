import { Router } from 'express';
import controllerCreateTask from '../controller/controllerCreateTask';
import validateStatus from '../middlewares/validateStatus';
import validateTask from '../middlewares/validateTask';
import validateToken from '../middlewares/validateToken';

const routerTask = Router();

routerTask.route('/').post(validateToken, validateTask, validateStatus, controllerCreateTask);

export default routerTask;
