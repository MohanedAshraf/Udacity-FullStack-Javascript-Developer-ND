import { ContactInfoType, ContactInfoModel } from '../../models/ContactInfo';
import { User, UserModel } from '../../models/User';

const contactInfoModel = new ContactInfoModel();
const userModel = new UserModel();
const baseContactInfo: ContactInfoType = {
  user_id: 0,
  phonenumber: '012213122313',
  address: 'Cairo',
};

let contactInfo: ContactInfoType;
let user: User;

describe('Testing Model: ContactInfo', () => {
  beforeAll(async () => {
    user = await userModel.create({
      username: 'mohamed',
      firstname: 'mohamed',
      lastname: 'ashraf',
      password: '123',
    });
    if (user.id) baseContactInfo.user_id = Number(user.id);
  });
  it('Must have a create method', () => {
    expect(contactInfoModel.create).toBeDefined();
  });

  it('Testing ContactInfo create method', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    contactInfo = await contactInfoModel.create(baseContactInfo);

    expect({
      user_id: Number(contactInfo.user_id),
      phonenumber: contactInfo.phonenumber,
      address: contactInfo.address,
    }).toEqual({
      user_id: baseContactInfo.user_id,
      phonenumber: baseContactInfo.phonenumber,
      address: baseContactInfo.address,
    });
  });

  it('Must have a show method', () => {
    expect(contactInfoModel.show).toBeDefined();
  });

  it('Testing the show model to return a contactInfo that belongs to user', async () => {
    const foundContactInfo = await contactInfoModel.show(contactInfo.user_id);
    expect(foundContactInfo).toEqual(contactInfo);
  });
  it('Must have an update method', () => {
    expect(contactInfoModel.update).toBeDefined();
  });

  it('Testing ContactInfo update method to return the updated ContactInfo', async () => {
    const updatedContactInfo = await contactInfoModel.update({
      ...contactInfo,
      phonenumber: '00000',
    });
    expect(updatedContactInfo.phonenumber).toEqual('00000');
  });

  it('Must have a delete method', () => {
    expect(contactInfoModel.delete).toBeDefined();
  });

  it('Testing the delete model to return the deleted contactInfo', async () => {
    const deletedContactInfo = await contactInfoModel.delete(
      contactInfo.user_id
    );
    expect(deletedContactInfo.id).toEqual(contactInfo.id);
  });
});
