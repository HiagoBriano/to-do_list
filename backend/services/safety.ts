import { compareSync, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET = 'super_senha';

export const createToken = (email: string) => {
  const token = jwt.sign({ email }, SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export const readToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (e) {
    return null;
  }
};

export const bcrypt = async (password: string) => {
  const passwordHash = await hash(password, 1);
  return passwordHash;
};

export const validBcrypt = async (password: string, code: string) => {
  const correct = await compareSync(password, code);
  return correct;
};
