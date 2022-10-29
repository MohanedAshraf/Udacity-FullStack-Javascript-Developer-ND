import client from '../database';

export type ContactInfoType = {
  id?: number;
  user_id: number;
  phoneNumber: string;
  address: string;
};

export class ContactInfoModel {
  async create(contact_info: ContactInfoType): Promise<ContactInfoType> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO contact_info (user_id , phoneNumber , address ) VALUES($1, $2, $3 ) RETURNING *';
      // Here we will hash the password
      const result = await connection.query(sql, [
        contact_info.user_id,
        contact_info.phoneNumber,
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

  async show(id: number): Promise<ContactInfoType> {
    try {
      const sql = 'SELECT * FROM contact_info WHERE id=($1)';
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

  async update(contact_info: any): Promise<ContactInfoType> {
    try {
      const conn = await client.connect();
      const sql =
        'UPDATE contact_info SET phoneNumber=($2), address=($3) WHERE id=($1) RETURNING *';
      const result = await conn.query(sql, [
        contact_info.id,
        contact_info.phoneNumber,
        contact_info.address,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not update contactInfo  ${error}`);
    }
  }

  async delete(id: number): Promise<ContactInfoType> {
    try {
      const conn = await client.connect();
      const sql = 'DELETE FROM contact_info WHERE id=($1) RETURNING *';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not delete ContactInfo ${id}, ${error}`);
    }
  }
}
