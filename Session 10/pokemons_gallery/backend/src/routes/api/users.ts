import { Router } from 'express';
import { create, authenticate } from '../../controllers/users';

const route = Router();

route.post('/', create);
route.post('/auth', authenticate);

export default route;
