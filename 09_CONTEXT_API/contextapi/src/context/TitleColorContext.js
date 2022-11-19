import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

// 6 - ALTERANDO CONTEXTO COMPLEXO
const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "GRAY":
      return { ...state, color: "gray" };
    default:
      return state;
  } 
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
