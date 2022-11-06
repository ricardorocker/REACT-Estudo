import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    { id: 1, brand: "Fiat", kilometers: 15000, color: "Azul", newCar: false },
    { id: 2, brand: "Ford", kilometers: 50000, color: "Prata", newCar: false },
    { id: 3, brand: "Jeep", kilometers: 0, color: "Preto", newCar: true },
  ]

  return (
    <div className="App">
      <h1>Desafio - React com CSS</h1>   
      {/* Passando objeto inteiro como propriedade

      {cars.map((car) => {
        return <CarDetails 
        car={car}
        />
      })}

       */}
       
      {cars.map((car) => {
        return <CarDetails 
        key={car.id}
        brand={car.brand}
        kilometers={car.kilometers}
        color={car.color}
        newCar={car.newCar}
        />
      })}
    </div>
  );
}

export default App;
