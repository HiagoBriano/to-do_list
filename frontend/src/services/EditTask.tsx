import axios from 'axios';
import { API_URL } from './API_URL';

export const EditTask = async (
  authorization: string,
  idTask: number,
  task: string,
  status: string
) => {
  var config = {
    method: 'patch',
    url: `${API_URL}task`,
    headers: {
      authorization,
    },
    data: {
      idTask,
      task,
      status,
    },
  };

  const response = await axios(config)
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
