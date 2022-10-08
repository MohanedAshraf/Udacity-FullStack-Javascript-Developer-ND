import { Request, Response, NextFunction } from 'express';

export const validation = (req: Request, res: Response, next: NextFunction) => {
  const { filename } = req.query;

  if (!filename) return res.status(404).send('Yous should include filename');

  next();
};
