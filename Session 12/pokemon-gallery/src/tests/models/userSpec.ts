import { User, UserModel } from '../../models/User';

const userModel = new UserModel();
const baseUser: User = {
  username: 'Moha',
  firstname: 'Mohaned',
  lastname: 'Ashraf',
  password: 'pass123',
};
let user: User;
describe('Testing Model: User', () => {
  it('Must have a create method', () => {
    expect(userModel.create).toBeDefined();
  });
  it('Testing the create function with a user', async () => {
    user = await userModel.create(baseUser);
    const { username, firstname, lastname } = user;
    expect({ username, firstname, lastname }).toEqual({
      username: baseUser.username,
      firstname: baseUser.firstname,
      lastname: baseUser.lastname
    });
  });

  it('Must have an authenticate method', () => {
    expect(userModel.authenticate).toBeDefined();
  });

  it('Testing the authenticate model to return logged in user ', async () => {
    const authUser = await userModel.authenticate(
      baseUser.username,
      baseUser.password
    );
    expect(authUser).toEqual(user);
  });
});