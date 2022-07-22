import consultUserByEmail from '../models/consultUserByEmail';
import createUser from '../models/createUser';

const serviceCreateUser = async (
  name: string,
  email: string,
  password: string
) => {
  const queryAnswer = await consultUserByEmail.consultUserByEmail(email);

  if (!queryAnswer) {
    const newUserData = await createUser.createUser(name, email, password);

    return newUserData;
  }

  return 'E-mail already registered';
};

export default serviceCreateUser;
