import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
