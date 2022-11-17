import "./App.css";

// 1 - CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import SearchForm from "./components/SearchForm";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - LINKS COM REACT ROUTER */}
        <Navbar />
        {/* 9 - SEARCH PARAMS */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - NESTED ROUTES */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - ROTA DINÂMICA */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - SEARCH PARAMS */}
          <Route path="/search" element={<Search />} />
          {/* 10 - REDIRECT */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - NO MATCH ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
