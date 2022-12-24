import { Request, Response } from 'express';
import { PokemonModel } from '../models/Pokemon';

const Pokemon = new PokemonModel();

export const index = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.index();
    res.send(pokemons);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    const pokemon = await Pokemon.show(id);
    res.send(pokemon);
  } catch (error) {
    res.status(401).json(error);
  }
};
