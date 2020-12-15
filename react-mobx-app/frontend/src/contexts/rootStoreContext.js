import { createContext, useContext } from 'react';

const rootStoreContext = createContext();

export const RootStoreProvider = rootStoreContext.Provider;

export const useRootStore = () => {
  return useContext(rootStoreContext);
};