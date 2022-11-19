import { useContext } from "react";
import { CounterContex } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Products = () => {
  const { counter } = useContext(CounterContex);

  return (
    <div>
      <h1>PRODUTOS</h1>
      <p>O valor do contador é: {counter}</p>
      {/* 3 - ALTERANDO CONTEXTO */}
      <ChangeCounter />
    </div>
  );
};

export default Products;
