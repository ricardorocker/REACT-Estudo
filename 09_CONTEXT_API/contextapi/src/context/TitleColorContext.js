import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

const titleColorReducer = () => {};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  return (
    <TitleColorContext.Provider value={{...state}}>
      {children}
    </TitleColorContext.Provider>
  );
};
