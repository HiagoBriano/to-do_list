import axios from 'axios';

import { API_URL } from './API_URL';

interface ITask {
  id: number;
  task: string;
  status: 'done' | 'in progress' | 'pending';
  createIn: any;
  updatedAt: any;
}

interface IResponse {
  id: number;
  name: string;
  email: string;
  Task: ITask[];
  message?: string
}

export const FetchTasks = async (token: string): Promise<IResponse> => {
  const response = await axios
    .get(`${API_URL}task`, {
      headers: {
        authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
