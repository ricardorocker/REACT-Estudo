import './App.css';

import Vancouver from './assets/vancouver.jpg';
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
