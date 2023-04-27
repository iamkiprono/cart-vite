import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, iincreaseQuanity } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <h4>Kes{item.price}</h4>
              <p>{item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id, item.quantity)}>
                Increse
              </button>

              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <h3>Total:Kes{totalPrice}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
