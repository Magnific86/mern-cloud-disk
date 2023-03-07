import { createContext, FC, useState, useContext, ReactNode } from "react";

interface ContextState {}

interface ChildrenProps {
  children: ReactNode;
}

const MyContext = createContext<ContextState>(null);

const AppProvider = MyContext.Provider;

export const MainProvider: FC<ChildrenProps> = ({ children }) => {
  return <AppProvider value={{}}>{children}</AppProvider>;
};

export const useAppContext = () => {
  const data = useContext(MyContext);

  if (!data) {
    throw new Error("You cannot use MyContext outside AppProvider!");
  }
  return data;
};
