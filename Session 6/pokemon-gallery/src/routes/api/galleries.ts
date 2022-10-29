import { Router } from 'express';
import {
  create,
  show,
  index,
  deleteGallery,
  addPokemon,
  removePokemon,
} from '../../controllers/galleries';

const route = Router();

route.get('/', index);
route.get('/:id', show);
route.post('/', create);
route.delete('/:id', deleteGallery);
route.post('/:id/pokemons/:pokemon_id', addPokemon);
route.delete('/:id/pokemons/:pokemon_id', removePokemon);
export default route;
