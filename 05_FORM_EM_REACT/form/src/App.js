import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>FORMS</h1>
      <MyForm user={{ name: "Ricardo", email: "ricardo.rocker@gmail.com" }} />
    </div>
  );
}

export default App;
