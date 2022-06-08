import "./App.css";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* 404 route */}
        <Route path="*" element={<h1>404, page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
