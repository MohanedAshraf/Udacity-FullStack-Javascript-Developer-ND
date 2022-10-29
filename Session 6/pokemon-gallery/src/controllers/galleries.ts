import { Request, Response } from 'express';
import { GalleryModel } from '../models/Gallery';

const Gallery = new GalleryModel();

export const index = async (req: Request, res: Response) => {
  try {
    const galleries = await Gallery.index();
    res.send(galleries);
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
    const pokemon = await Gallery.show(id);
    res.send(pokemon);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { user_id, name, imageUrn } = req.body;
    if (!user_id || !name || !imageUrn) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (user_id , name , imageUrn) are  required'
        );
    }
    const gallery = { user_id, name, imageUrn };
    const createdGallery = await Gallery.create(gallery);
    res.send(createdGallery);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteGallery = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }

    const deleted = await Gallery.delete(id);
    res.send(deleted);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const addPokemon = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const pokemon_id = Number(req.params.pokemon_id);

    if (!id || !pokemon_id) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (id , pokemon_id) are  required'
        );
    }
    const addPokemon = await Gallery.addPokemon(id, pokemon_id);
    res.send(addPokemon);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const removePokemon = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const pokemon_id = Number(req.params.pokemon_id);

    if (!id || !pokemon_id) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (id , pokemon_id) are  required'
        );
    }
    const addPokemon = await Gallery.removePokemon(id, pokemon_id);
    res.send(addPokemon);
  } catch (error) {
    res.status(401).json(error);
  }
};
