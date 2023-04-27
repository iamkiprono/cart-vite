import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (image, id, name, price, quantity) => {
    setCart([...cart, { image, id, name, price, quantity }]);
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const increaseQuanity = (id, qua) => {
    const quantity = qua + 1;

    setCart([...cart, { image, id, name, price, quantity }]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuanity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
