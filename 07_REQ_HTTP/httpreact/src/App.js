import './App.css';
import { useEffect, useState } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // RESGATANDO DADOS
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json()
      setProducts(data);

      /* Outro método de fazer fetch
      await fetch(url)
        .then(T => T.json())
        .then((data) => {
          setProducts(data);
        });
      */
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {products.map((product) => {
        return <li key={product.id}>{product.name} - {product.price}</li>
      })}
    </div>
  );
}

export default App;
