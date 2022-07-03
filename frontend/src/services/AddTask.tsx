import axios from 'axios';
import { API_URL } from './API_URL';

export const AddTask = async (token: string, task: string, status: string) => {
  const response = await axios
    .post(
      `${API_URL}task`,
      {
        task,
        status,
      },
      {
        headers: {
          authorization: token,
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
