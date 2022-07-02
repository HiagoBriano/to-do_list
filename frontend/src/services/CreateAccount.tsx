import axios from 'axios';
import { API_URL } from './API_URL';

export const CreateAccount = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await axios
    .post(`${API_URL}user`, {
      name,
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
