import './App.css';
import { useEffect, useState } from 'react';

// 4 - CUSTOM HOOK
import { useFetch } from './hooks/useFetch';
import { usePost } from './hooks/usePost';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - CUSTOM HOOK
  const { data: itens, httpConfig } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - RESGATANDO DADOS
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json()
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // 2 - ADIÇÃO DE PRODUTOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 -CARREGAMENTO DINÂMICO
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    
    // 5 - REFATORANDO POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {itens && itens.map((product) => {
        return <li key={product.id}>{product.name} - R${product.price}</li>
      })}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Descrição
          </label>
          <input
            type="text"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            Preço
          </label>
          <input
            type="number"
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input type="submit" value="Adicionar Produto" />
        </form>
      </div>
    </div>
  );
}

export default App;
