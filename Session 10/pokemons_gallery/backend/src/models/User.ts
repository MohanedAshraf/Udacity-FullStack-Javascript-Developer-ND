import client from '../database';
import bcrypt from 'bcrypt';

export type User = {
  id?: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
};

const { PEPPER } = process.env;

export class UserModel {
  async create(user: User): Promise<User> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO users (username, firstname, lastname, password ) VALUES($1, $2, $3 ,$4 ) RETURNING *';

      const hashedPassword = bcrypt.hashSync(user.password + PEPPER, 12);

      const result = await connection.query(sql, [
        user.username,
        user.firstname,
        user.lastname,
        hashedPassword,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the user with the following error: ${error}`
      );
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users WHERE username=($1)';
      const result = await conn.query(sql, [username]);
      const user = result.rows[0];

      if (user) {
        if (bcrypt.compareSync(password + PEPPER, user.password)) {
          return user;
        }
      }
      return null;
    } catch (error) {
      throw new Error(`Failed to sign in  with the following error: ${error}`);
    }
  }
}
