import client from '../database';

export type Pokemon = {
  id?: number;
  name: string;
  type: string;
  imageurn: string;
};

export class PokemonModel {
  async index(): Promise<Pokemon[]> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM pokemons';
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async show(id: number): Promise<Pokemon> {
    try {
      const sql = 'SELECT * FROM pokemons WHERE id=($1)';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
