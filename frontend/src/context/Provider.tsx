import { ReactNode, useState } from 'react';
import usercontext from './Context';

interface IUserContextProvider {
  children: ReactNode;
}

const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [loading, setLoading] = useState(false);

  const contextValue = {
    loading,
    setLoading,
  };

  return (
    <usercontext.Provider value={contextValue}>{children}</usercontext.Provider>
  );
};

export default UserContextProvider;
