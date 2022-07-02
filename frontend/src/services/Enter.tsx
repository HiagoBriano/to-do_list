import axios from 'axios';
import { API_URL } from './API_URL';

export const Enter = async (email: string, password: string) => {
  const response = await axios
    .post(`${API_URL}login`, {
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
