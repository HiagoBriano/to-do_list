import { NextFunction, Request, Response } from 'express';

const validateStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ message: 'Sending the status is mandatory' });
  }
  const validStatus = ['done', 'in progress', 'pending'];

  if (!validStatus.includes(status)) {
    return res
      .status(400)
      .json({ message: 'invalid status, try done, in progress or pending' });
  }

  next();
};

export default validateStatus;
