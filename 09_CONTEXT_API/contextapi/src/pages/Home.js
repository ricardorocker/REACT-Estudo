import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { CounterContex } from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContex);

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
