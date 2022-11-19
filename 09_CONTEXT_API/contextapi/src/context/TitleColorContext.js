import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

// 6 - ALTERANDO CONTEXTO COMPLEXO
const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "DANGER":
      return { ...state, color: "red", backgroundColor: "yellow" };
    case "SUCCES":
      return { ...state, color: "greenyellow", backgroundColor: "green"  };
    default:
      return state;
  } 
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple", backgroundColor: "gray" });

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
