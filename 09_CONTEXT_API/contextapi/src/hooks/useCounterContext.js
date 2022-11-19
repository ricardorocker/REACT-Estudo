import { useContext } from "react";
import { CounterContex } from "../context/CounterContext";

// 4 - REFATORANDO CONTEXT COM HOOK
export const useCounterContext = () => {

    const context = useContext(CounterContex);

    if(!context){
        console.log("Houve algum erro no hook context!");
    }
    
    return context;

}