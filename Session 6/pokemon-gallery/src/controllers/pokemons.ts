import { Request, Response } from 'express';
import { PokemonModel } from '../models/Pokemon';

const Pokemon = new PokemonModel();

export const index = async (req: Request, res: Response) => {
  const results = await Pokemon.index();
  res.send(results);
};
