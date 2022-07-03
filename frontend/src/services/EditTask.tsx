import axios from 'axios';

export const EditTask = async (
  authorization: string,
  idTask: number,
  task: string,
  status: string
) => {
  var config = {
    method: 'patch',
    url: 'http://localhost:3001/task',
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
