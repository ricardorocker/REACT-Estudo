// import { useContext } from "react";
// import { CounterContex } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - REFATORANDO CONTEXT COM HOOK
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - CONTEXT MAIS COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContex);
  const { counter } = useCounterContext();

  // 5 - CONTEXT MAIS COMPLEXO
  const { color, dispatch } = useTitleColorContext();

  // 6 - ALTERANDO CONTEXTO COMPLEXO
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>HOME</h1>
      <p>O valor do contador é: {counter}</p>
      {/* 3 - ALTERANDO CONTEXTO */}
      <ChangeCounter />
      {/* 6 - ALTERANDO CONTEXTO COMPLEXO */}
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("GRAY")}>Cinza</button>
    </div>
  );
};
export default Home;
