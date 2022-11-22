import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
