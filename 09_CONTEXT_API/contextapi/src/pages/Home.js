// import { useContext } from "react";
// import { CounterContex } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - REFATORANDO CONTEXT COM HOOK
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const { counter } = useContext(CounterContex);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>HOME</h1>
      <p>O valor do contador é: {counter}</p>
      {/* 3 - ALTERANDO CONTEXTO */}
      <ChangeCounter />
    </div>
  );
};
export default Home;
