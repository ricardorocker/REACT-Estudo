import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* Css global */}
      <h1>React com CSS</h1>
      {/* Css de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
    </div>
  );
}

export default App;
