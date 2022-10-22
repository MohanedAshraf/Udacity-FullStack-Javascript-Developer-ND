import { Pool } from 'pg';

const client = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'udacity',
});

export default client;
