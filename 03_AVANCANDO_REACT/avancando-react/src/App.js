import { useState } from 'react';
import './App.css';

import Vancouver from './assets/vancouver.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Ricardo Santos Rocker";
  const [userName] = useState("ricardo.rocker")

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
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={name} login={userName}/>
      {/* Destructuring */}
      <CarDetails brand="Chevrolet" year={2022} color="Prata"/>
    </div>
  );
}

export default App;
