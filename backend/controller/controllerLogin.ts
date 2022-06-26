import { Request, Response } from 'express';
import { createToken, validBcrypt } from '../services/safety';
import serviceLogin from '../services/serviceLogin';

const controllerLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const replyIfTheEmailExists = await serviceLogin(email);
  if (replyIfTheEmailExists === 'Unregistered E-mail') {
    return res.status(400).json({ message: replyIfTheEmailExists });
  }
  if (
    replyIfTheEmailExists &&
    (await validBcrypt(password, replyIfTheEmailExists.password))
  ) {
    const token = createToken(email);
    return res.status(200).json({ name: replyIfTheEmailExists.name, token });
  }
  return res.status(400).json({ message: 'invalid password' });
};

export default controllerLogin;
