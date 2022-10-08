import { Router, Request, Response } from 'express';
import pokemonsRoute from './api/pokemons';
const routes = Router();

routes.use('/pokemons', pokemonsRoute);

routes.get('*', (req: Request, res: Response) => {
  res.status(404);
  res.send(`<h1> Page is not Found </h1>`);
});

export default routes;
