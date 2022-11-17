// 1 - CRIAR CONTEXT
import { createContext, useState } from "react";

export const CounterContex = createContext();

// 2 - CRIAR PROVIDER
export const CounterContexProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContex.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContex.Provider>
  );
};
