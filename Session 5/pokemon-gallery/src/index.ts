import express from 'express';
import client from './database';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const conn = await client.connect();
  const query = 'SELECT * FROM pokemons';
  const { rows } = await conn.query(query);
  conn.release();
  res.send(rows);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
