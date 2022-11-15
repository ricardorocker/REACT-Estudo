import './App.css';

// 1 - CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - LINKS COM REACT ROUTER */}
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
