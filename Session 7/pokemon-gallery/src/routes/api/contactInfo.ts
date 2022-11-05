import { Router } from 'express';
import {
  create,
  show,
  update,
  deleteContactInfo,
} from '../../controllers/contactInfo';
import { auth } from '../../middleware/auth';

const route = Router();

route.post('/', auth, create);
route.get('/:id', show);
route.put('/:id', update);
route.delete('/:id', deleteContactInfo);
export default route;
