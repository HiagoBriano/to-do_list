import { NextFunction, Request, Response } from 'express';
import { bcrypt, createToken } from '../services/safety';
import serviceCreateUser from '../services/serviceCreateUser';

const controllerCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const passwordHash = await bcrypt(password);
    const response = await serviceCreateUser(name, email, passwordHash);
    if (response === 'E-mail already registered') {
      return res.status(400).json({ message: response });
    }
    if (response) {
      const token = await createToken(response.id, email);
      return res.status(201).json({ ...response, token });
    }
  } catch (error) {
    next(error);
  }
};

export default controllerCreateUser;
