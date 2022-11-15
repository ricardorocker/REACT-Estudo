import "./App.css";

// 1 - CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - LINKS COM REACT ROUTER */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - NESTED ROUTES */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - ROTA DINÂMICA */}
          <Route path="/products/:id" element={<Product />} />
          {/* 7 - NO MATCH ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
