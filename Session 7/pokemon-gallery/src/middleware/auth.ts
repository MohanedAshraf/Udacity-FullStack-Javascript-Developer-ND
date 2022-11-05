import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

export const auth = (req: Request, _res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader?.split(' ')[1];
  const decoded = jwt.verify(token as string, TOKEN_SECRET) as JwtPayload;
  if (!decoded) {
    throw new Error('Something wrong with the token');
  }
  (req as any).userId = decoded.user.id;

  next();
};
