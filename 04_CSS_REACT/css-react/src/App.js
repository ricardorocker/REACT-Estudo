import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("Ricardo");

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid black" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h3 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>
        CSS inline dinâmico
      </h3>
      <h3 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>
        CSS inline dinâmico
      </h3>
      <h3 style={
        name === "Ricardo" ? (
          { color: "white", backgroundColor: "green" }
        ) : (
          null
        )}>
        CSS inline dinâmico
      </h3>
    </div>
  );
}

export default App;
