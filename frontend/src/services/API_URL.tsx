const host: string = process.env.REACT_APP_BACKEND_HOSTNAME || 'localhost';
const port: string = process.env.REACT_APP_BACKEND_PORT || '3001';

export const API_URL: string = `http://${host}:${port}/`;
