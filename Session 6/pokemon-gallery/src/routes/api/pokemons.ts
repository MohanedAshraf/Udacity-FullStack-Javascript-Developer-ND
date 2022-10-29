import { Router } from 'express';
import { index } from '../../controllers/pokemons';

const route = Router();

route.get('/', index);

export default route;
