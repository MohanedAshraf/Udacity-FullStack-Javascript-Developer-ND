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
route.get('/', auth, show);
route.put('/', auth, update);
route.delete('/', auth, deleteContactInfo);
export default route;
