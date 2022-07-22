import consultUserByEmail from '../models/consultUserByEmail';

const serviceLogin = async (email: string) => {
  const queryAnswer = await consultUserByEmail.consultUserByEmail(email);
  return queryAnswer;
};

export default serviceLogin;
