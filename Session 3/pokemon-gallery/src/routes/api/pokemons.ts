import { Router } from 'express';

const app = Router();

app.get('/', (req, res) => {
  res.send('Here is Pokemon');
});

export default app;
