import axios from 'axios';

import { API_URL } from './API_URL';

export const activateServer = async () => {
  axios.get(`${API_URL}`);
};
