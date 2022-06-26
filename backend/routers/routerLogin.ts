import { Router } from 'express';
import controllerLogin from '../controller/controllerLogin';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';

const routerLogin = Router();

routerLogin.route('/').post(validateEmail, validatePassword, controllerLogin);

export default routerLogin;
