import { useState } from 'react';
import './App.css';

import Vancouver from './assets/vancouver.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import FragmentComponent from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Ricardo Santos Rocker";
  const [userName] = useState("ricardo.rocker")

  const cars = [
    { id: 1, brand: "Jeep", year: 2018, color: "Azul", newCar: false },
    { id: 2, brand: "Ferrari", year: 2022, color: "Vermelho", newCar: true },
    { id: 3, brand: "VolksWagen", year: 2020, color: "Marrom", newCar: false },
  ]

  const showMessage = () => {
    const newContent = document.createTextNode("Função do componente pai executada!");
    const currentDiv = document.getElementById("textInserido");
    currentDiv.appendChild(newContent);
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg)
  };

  const users = [
    { id: 1, name: "Ricardo Rocker", age: 27, job: "Angular Dev" },
    { id: 2, name: "Petrucia Lira", age: 24, job: "Bióloga" },
    { id: 3, name: "Amanda Santos", age: 22, job: "Enfermeira" },
    { id: 4, name: "Tiago Soares", age: 10, job: "Estudante" },
  ];

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
          key={car.id}
          brand={car.brand}
          year={car.year}
          color={car.color}
          newCar={car.newCar} />
      ))}
      {/* Fragment */}
      <FragmentComponent propFragment="teste" />
      {/* Children */}
      <h1>Children</h1>
      <Container text="Texto vindo pela prop">
        <p>E este é o conteúdo fora do componente</p>
      </Container>
      <Container text="Texto 2">
        <h5>Testando container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction functionFather={showMessage} />
      {/* State lift */}
      <Message message={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio Módulo 3 */}
      <h1>Desafio Módulo 3</h1>
      {/* <UserDetails id={users[0].id} name={users[0].name} age={users[0].age} occupation={users[0].occupation} /> */}
      {users.map((user) => {
        return <UserDetails
          id={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      })}
    </div>
  );
}

export default App;
