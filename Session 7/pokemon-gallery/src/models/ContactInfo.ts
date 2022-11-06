import client from '../database';

export type ContactInfoType = {
  id?: number;
  user_id: number;
  phonenumber: string;
  address: string;
};

export class ContactInfoModel {
  async create(contact_info: ContactInfoType): Promise<ContactInfoType> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO contact_info (user_id , phonenumber , address ) VALUES($1, $2, $3 ) RETURNING *';
      // Here we will hash the password
      const result = await connection.query(sql, [
        contact_info.user_id,
        contact_info.phonenumber,
        contact_info.address,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the contact_info with the following error: ${error}`
      );
    }
  }

  async show(user_id: number): Promise<ContactInfoType> {
    try {
      const sql = 'SELECT * FROM contact_info WHERE user_id=($1)';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql, [user_id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async update(contact_info: any): Promise<ContactInfoType> {
    try {
      const conn = await client.connect();
      const sql =
        'UPDATE contact_info SET phonenumber=($2), address=($3) WHERE user_id=($1) RETURNING *';
      const result = await conn.query(sql, [
        contact_info.user_id,
        contact_info.phonenumber,
        contact_info.address,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not update contactInfo  ${error}`);
    }
  }

  async delete(user_id: number): Promise<ContactInfoType> {
    try {
      const conn = await client.connect();
      const sql = 'DELETE FROM contact_info WHERE user_id=($1) RETURNING *';
      const result = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete ContactInfo for user ${user_id}, ${error}`
      );
    }
  }
}
