import { Router } from 'express';
import { index , show } from '../../controllers/pokemons';

const route = Router();

route.get('/', index);
route.get('/:id', show);

export default route;
