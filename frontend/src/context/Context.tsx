import { createContext } from 'react';

interface IncitialValue {
  loading: boolean;
  setLoading: (newState: boolean) => void;
}

export const incitialValue = {
  loading: false,
  setLoading: () => {},
};

const usercontext = createContext<IncitialValue>(incitialValue);

export default usercontext;
