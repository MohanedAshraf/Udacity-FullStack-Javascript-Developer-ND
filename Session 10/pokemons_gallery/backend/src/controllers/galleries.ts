import { Request, Response } from 'express';
import { GalleryModel } from '../models/Gallery';

const Gallery = new GalleryModel();

export const index = async (req: Request, res: Response) => {
  try {
    const user_id = (req as any).userId;
    const galleries = await Gallery.index(user_id);
    res.send(galleries);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user_id = (req as any).userId;
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    const gallery = await Gallery.show(id, user_id);
    res.send(gallery);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { name, imageurn } = req.body;
    const user_id = (req as any).userId;
    if (!name || !imageurn) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (name , imageurn) are  required'
        );
    }
    const gallery = { user_id, name, imageurn };
    const createdGallery = await Gallery.create(gallery);
    res.send(createdGallery);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteGallery = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user_id = (req as any).userId;
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }

    const deleted = await Gallery.delete(id, user_id);
    res.send(`Gallery with id ${deleted.id} Deleted`);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const addPokemon = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const pokemon_id = Number(req.params.pokemon_id);
    const user_id = (req as any).userId;

    if (!id || !pokemon_id) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (id , pokemon_id) are  required'
        );
    }
    const gallery = await Gallery.show(id, user_id);
    if (!gallery) {
      return res
        .status(400)
        .send('Error, user does not have access to this gallery');
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
    const user_id = (req as any).userId;

    if (!id || !pokemon_id) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (id , pokemon_id) are  required'
        );
    }
    const gallery = await Gallery.show(id, user_id);
    if (!gallery) {
      return res
        .status(400)
        .send('Error, user does not have access to this gallery');
    }
    await Gallery.removePokemon(id, pokemon_id);
    res.send(`Pokemon ${pokemon_id} inside Gallery ${id}  Deleted`);
  } catch (error) {
    res.status(401).json(error);
  }
};
