import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME ,TEST_DB_NAME , ENV} = process.env;
const client = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: ENV === 'dev' ? DB_NAME : TEST_DB_NAME,
});

export default client;
