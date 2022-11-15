import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4 - ROTA DINAMICA
  const { id } = useParams();

  // 5 - CARREGAMENTO DADO INVIDUAL
  const url = `http://localhost:3000/products/${id}`;
  
  const { data: product, error, loading } = useFetch(url);

  return (
    <>
      <p> Id do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$ {product.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;
