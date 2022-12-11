import { Router } from 'express';
import pokemonsRoute from './api/pokemons';
import contactInfoRoute from './api/contactInfo';
import usersRoute from './api/users';
import galleriesRoute from './api/galleries';

const routes = Router();

routes.use('/pokemons', pokemonsRoute);
routes.use('/users', usersRoute);
routes.use('/users/contactinfo', contactInfoRoute);
routes.use('/users/galleries', galleriesRoute);

export default routes;
