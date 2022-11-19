import { CounterContex } from "../context/CounterContext";
import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";

const About = () => {
  const { counter } = useContext(CounterContex);

  return (
    <div>
      <h1>ABOUT</h1>
      <p>O valor do contador é: {counter}</p>
      {/* 3 - ALTERANDO CONTEXTO */}
      <ChangeCounter />
    </div>
  );
};

export default About;
