import { Router } from 'express';
import pokemonsRoute from './api/pokemons';
const routes = Router();

routes.use('/pokemons', pokemonsRoute);

export default routes;
