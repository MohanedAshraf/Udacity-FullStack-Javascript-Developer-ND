import { Router } from 'express';
import {
  create,
  show,
  index,
  deleteGallery,
  addPokemon,
  removePokemon,
} from '../../controllers/galleries';
import { auth } from '../../middleware/auth';

const route = Router();

route.get('/', auth, index);
route.get('/:id', auth, show);
route.post('/', auth, create);
route.delete('/:id', auth, deleteGallery);
route.post('/:id/pokemons/:pokemon_id', auth, addPokemon);
route.delete('/:id/pokemons/:pokemon_id', auth, removePokemon);
export default route;
