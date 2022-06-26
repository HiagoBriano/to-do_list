import consultUserByEmail from '../models/consultUserByEmail';
import createUser from '../models/createUser';

const serviceCreateUser = async (
  name: string,
  email: string,
  password: string
) => {
  const queryAnswer = await consultUserByEmail(email);
  if (queryAnswer === 'Unregistered E-mail') {
    const newUserData = await createUser(name, email, password);
    return newUserData;
  }

  return 'E-mail already registered';
};

export default serviceCreateUser;
