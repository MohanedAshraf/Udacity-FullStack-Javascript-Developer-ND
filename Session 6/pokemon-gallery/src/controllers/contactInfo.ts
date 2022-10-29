import { Request, Response } from 'express';
import { ContactInfoModel, ContactInfoType } from '../models/ContactInfo';

const ContactInfo = new ContactInfoModel();

export const create = async (req: Request, res: Response) => {
  try {
    const { user_id, phoneNumber, address } = req.body;
    if (!user_id || !phoneNumber || !address) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. (user_id , phoneNumber , address) are  required'
        );
    }
    const contact_info: ContactInfoType = { user_id, phoneNumber, address };
    const contact = await ContactInfo.create(contact_info);
    res.send(contact);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    const contact = await ContactInfo.show(id);
    res.send(contact);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
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
    const contact_info = { id, phoneNumber, address };
    const contact = await ContactInfo.update(contact_info);
    res.send(contact);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteContactInfo = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }

    const contact = await ContactInfo.delete(id);
    res.send(contact);
  } catch (error) {
    res.status(401).json(error);
  }
};
