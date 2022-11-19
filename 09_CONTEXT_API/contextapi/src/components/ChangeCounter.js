// 3 - ALTERANDO CONTEXTO

import { useContext } from "react";
import { CounterContex } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContex);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
    </div>
  );
};

export default ChangeCounter;
