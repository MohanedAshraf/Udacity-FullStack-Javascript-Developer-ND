import client from '../database';

export type User = {
  id?: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
};

export class UserModel {
  async create(user: User): Promise<User> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO users (username, firstname, lastname, password ) VALUES($1, $2, $3 ,$4 ) RETURNING *';
      // Here we will hash the password
      const result = await connection.query(sql, [
        user.username,
        user.firstname,
        user.lastname,
        user.password,
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
        // we will check if the input password is the same as the hashed
        return user;
      }
      return null;
    } catch (error) {
      throw new Error(`Failed to sign in  with the following error: ${error}`);
    }
  }
}
