import consultUserByEmail from '../models/consultUserByEmail';

const serviceLogin = async (email: string) => {
  const queryAnswer = await consultUserByEmail(email);
  return queryAnswer;
};

export default serviceLogin;
