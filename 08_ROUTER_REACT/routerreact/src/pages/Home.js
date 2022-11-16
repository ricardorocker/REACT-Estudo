import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";

const Home = () => {
  // 3 - CARREGAMENTO DE DADOS
  const url = "http://localhost:3000/products";

  const { data: items, error, httpConfig } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((items) => (
            <li key={items.id}>
              <h2>{items.name}</h2>
              <p>R$: {items.price}</p>
              <Link to={`/products/${items.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
