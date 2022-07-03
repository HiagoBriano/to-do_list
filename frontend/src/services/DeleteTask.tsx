import axios from 'axios';
import { API_URL } from './API_URL';

export const DeleteTask = async (token: string, idTask: number) => {
  const response = await axios
    .delete(`${API_URL}task`, {
      headers: {
        authorization: token,
      },
      data: {
        idTask,
      },
    })
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
