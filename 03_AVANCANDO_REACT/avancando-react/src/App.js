import { Fragment, useState } from 'react';
import './App.css';

import Vancouver from './assets/vancouver.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import FragmentComponent from './components/Fragment';

function App() {
  const name = "Ricardo Santos Rocker";
  const [userName] = useState("ricardo.rocker")
  const cars = [
    { brand: "Jeep", year: 2018, color: "Azul", newCar: false },
    { brand: "Ferrari", year: 2022, color: "Vermelho", newCar: true },
    { brand: "VolksWagen", year: 2020, color: "Marrom", newCar: false },
  ]

  return (
    <div className="App">
      <h1>AVANÇANDO EM REACT</h1>
      {/* Imgame em public */}
      <div>
        <img src="/montreal.jpg" alt="Canada Montreal" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={Vancouver} alt="Canada Vancouver" />
      </div>
      {/* Hooks: useState */}
      <ManageData />
      {/* Previous State */}
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={name} login={userName} />
      {/* Destructuring */}
      <h1>Destructuring</h1>
      <CarDetails brand="Chevrolet" year={2022} color="Prata" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="Fiat" year={2021} color="Preto" newCar={true} />
      <CarDetails brand="Ford" year={2019} color="Branco" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        year={car.year} 
        color={car.color} 
        newCar={car.newCar} />
      ))}
      {/* Fragment */}
      <FragmentComponent propFragment="teste"/>
    </div>
  );
}

export default App;
