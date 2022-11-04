import { Request, Response } from 'express';
import { UserModel, User } from '../models/User';

const User = new UserModel();

export const create = async (req: Request, res: Response) => {
  try {
    const { username, firstname, lastname, password } = req.body;
    if (!username || !firstname || !lastname || !password) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (username , firstname , lastname ,password) are  required'
        );
    }

    const user: User = { username, firstname, lastname, password };

    const createduser = await User.create(user);
    // we should return a token here
    res.json(createduser);
  } catch (error) {
    res.status(500).json('Failed to create user');
  }
};

export const authenticate = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .send(
        'Error, missing or malformed parameters. (username, password) are required'
      );
  }
  try {
    const user = await User.authenticate(username, password);

    if (user === null) {
      res.status(401);
      res.json('Incorrect user information');
    } else {
      // we should return a token here
      res.json(user);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
