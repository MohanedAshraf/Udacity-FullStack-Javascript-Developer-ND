import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { validation } from '../../middlewares/validation';

const route = Router();

route.get('/', validation, (req: Request, res: Response) => {
  const filename = req.query.filename;
  const imagePath = path.join(
    __dirname,
    '../../../assets/images',
    `${filename}.jpg`
  );

  if (fs.existsSync(imagePath)) {
    return res.sendFile(imagePath);
  }

  return res.status(404).send('Image not found');
});

export default route;
