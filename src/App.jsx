import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartContextProvider from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
