import { Request, Response } from 'express';
import { ContactInfoModel, ContactInfoType } from '../models/ContactInfo';

const ContactInfo = new ContactInfoModel();

export const create = async (req: Request, res: Response) => {
  try {
    const { phonenumber, address } = req.body;
    const user_id = (req as any).userId as number;
    if (!phonenumber || !address) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (phoneNumber , address) are  required'
        );
    }
    const contact_info: ContactInfoType = { user_id, phonenumber, address };
    const contact = await ContactInfo.create(contact_info);
    res.send(contact);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const user_id = (req as any).userId;
    if (!user_id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    const contact = await ContactInfo.show(user_id);
    res.send(contact);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user_id = (req as any).userId;
    if (!user_id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    const { phoneNumber, address } = req.body;
    if (!phoneNumber || !address) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (phoneNumber , address) are  required'
        );
    }
    const contact_info = { user_id, phoneNumber, address };
    const contact = await ContactInfo.update(contact_info);
    res.send(contact);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteContactInfo = async (req: Request, res: Response) => {
  try {
    const user_id = (req as any).userId;
    if (!user_id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }

    const contact = await ContactInfo.delete(user_id);
    res.send(`ContactInfo with id ${contact.id} Deleted`);
  } catch (error) {
    res.status(401).json(error);
  }
};
