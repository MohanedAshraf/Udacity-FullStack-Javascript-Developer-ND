import client from '../database';

export type Gallery = {
  id?: number;
  user_id: number;
  name: string;
  imageUrn: string;
};

export class GalleryModel {
  async index(user_id: number): Promise<Gallery[]> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM galleries WHERE user_id=($1)';
      const result = await conn.query(sql, [user_id]);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async show(id: number, user_id: number): Promise<Gallery> {
    try {
      const sql = 'SELECT * FROM galleries WHERE id=($1) AND user_id=($2)';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql, [id, user_id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
  async create(gallery: Gallery): Promise<Gallery> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO galleries (user_id , name , imageUrn ) VALUES($1, $2, $3 ) RETURNING *';
      // Here we will hash the password
      const result = await connection.query(sql, [
        gallery.user_id,
        gallery.name,
        gallery.imageUrn,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the Gallery with the following error: ${error}`
      );
    }
  }

  async delete(id: number, user_id: number): Promise<Gallery> {
    try {
      const conn = await client.connect();

      const sql = 'DELETE FROM pokemons_galleries WHERE gallery_id=($1)';
      await conn.query(sql, [id]);

      const sql2 =
        'DELETE FROM galleries WHERE id=($1) AND user_id=($2) RETURNING *';
      const result = await conn.query(sql2, [id, user_id]);

      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not delete Gallery ${id}, ${error}`);
    }
  }
  async addPokemon(id: number, pokemon_id: number): Promise<unknown> {
    try {
      const conn = await client.connect();
      const sql =
        'INSERT INTO pokemons_galleries (gallery_id, pokemon_id) VALUES($1, $2) RETURNING *';
      const result = await conn.query(sql, [id, pokemon_id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not add pokemon ${pokemon_id} to gallery ${id}: ${error}`
      );
    }
  }

  async removePokemon(id: number, pokemon_id: number): Promise<unknown> {
    try {
      const conn = await client.connect();
      const sql =
        'DELETE FROM pokemons_galleries WHERE gallery_id=($1) AND pokemon_id=($2) RETURNING *';
      const result = await conn.query(sql, [id, pokemon_id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete pokemon ${pokemon_id} to gallery ${id}: ${error}`
      );
    }
  }
}
