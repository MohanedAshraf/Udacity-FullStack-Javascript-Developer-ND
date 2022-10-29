import { Router } from 'express';
import {
  create,
  show,
  update,
  deleteContactInfo,
} from '../../controllers/contactInfo';

const route = Router();

route.post('/', create);
route.get('/:id', show);
route.put('/:id', update);
route.delete('/:id', deleteContactInfo);
export default route;
