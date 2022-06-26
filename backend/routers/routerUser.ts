import { Router } from 'express';
import controllerCreateUser from '../controller/controllerCreateUser';
import validateEmail from '../middlewares/validateEmail';
import validateName from '../middlewares/validateName';
import validatePassword from '../middlewares/validatePassword';

const routerUser = Router();

routerUser
  .route('/')
  .post(validateName, validateEmail, validatePassword, controllerCreateUser);

export default routerUser;
