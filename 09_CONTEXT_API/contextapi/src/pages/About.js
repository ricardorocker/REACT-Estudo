import { CounterContex } from "../context/CounterContext";
import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useContext(CounterContex);
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>ABOUT</h1>
      <p>O valor do contador é: {counter}</p>
      {/* 3 - ALTERANDO CONTEXTO */}
      <ChangeCounter />
    </div>
  );
};

export default About;
