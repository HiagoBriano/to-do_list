import { NextFunction, Request, Response } from 'express';
import { createToken, validBcrypt } from '../services/safety';
import serviceLogin from '../services/serviceLogin';

const controllerLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const replyIfTheEmailExists = await serviceLogin(email);
    if (!replyIfTheEmailExists) {
      return res.status(400).json({ message: 'Unregistered E-mail' });
    }
    if (
      replyIfTheEmailExists &&
      (await validBcrypt(password, replyIfTheEmailExists.password))
    ) {
      const token = createToken(replyIfTheEmailExists.id, email);
      return res
        .status(200)
        .json({ name: replyIfTheEmailExists.name, email, token });
    }
    return res.status(400).json({ message: 'invalid password' });
  } catch (error) {
    next(error);
  }
};

export default controllerLogin;
