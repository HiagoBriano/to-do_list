import { createContext } from 'react';

interface IncitialValue {
  token: string;
  setToken: (newState: string) => void;
}

export const incitialValue = {
  token: '',
  setToken: () => {},
};

const usercontext = createContext<IncitialValue>(incitialValue);

export default usercontext;
