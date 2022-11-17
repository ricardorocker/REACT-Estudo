import { useContext } from "react";
import { CounterContex } from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContex);

  return (
    <div>
      <h1>HOME</h1>
      <p>O valor do contador é: {counter}</p>
    </div>
  );
};
export default Home;
