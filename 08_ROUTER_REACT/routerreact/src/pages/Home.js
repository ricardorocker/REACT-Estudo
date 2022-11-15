import { useFetch } from '../hooks/useFetch'
import './Home.css'

const Home = () => {
  // 3 - CARREGAMENTO DE DADOS
  const url = "http://localhost:3000/products"

  const { data: items, error, httpConfig } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      {items &&
        <ul className='products'>
          {items.map((items) => (
            <li>
              <h2>{items.name}</h2>
              R$: {items.price}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Home;