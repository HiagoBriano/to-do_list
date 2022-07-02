import { ReactNode, useState } from 'react';
import usercontext from './Context';

interface IUserContextProvider {
  children: ReactNode;
}

const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [token, setToken] = useState('');

  const contextValue = {
    token,
    setToken,
  };

  return (
    <usercontext.Provider value={contextValue}>{children}</usercontext.Provider>
  );
};

export default UserContextProvider;
