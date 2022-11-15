import { useParams } from "react-router-dom";

const Product = () => {
    // 4 - ROTA DINAMICA
  const { id } = useParams();

  return (
    <>
      <p> Id do produto: {id}</p>
    </>
  );
};

export default Product;
