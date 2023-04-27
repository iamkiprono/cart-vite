import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
// import products from "../assets/Items";
import Cart from "./Cart";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [cartStatus, setCartStatus] = useState("");

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <div className="products-wrapper">
        {products.length == 0
          ? "Loading products..."
          : products.map((product) => {
              return (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt="" />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <h3>Kes{product.price}</h3>
                  <button
                    onClick={() => {
                      addToCart(
                        product.image,
                        product.id,
                        product.title,
                        product.price,
                        1
                      );
                      setCartStatus("Added to cart");
                      setTimeout(() => {
                        setCartStatus("");
                      }, 2000);
                    }}
                  >
                    Add to cart
                  </button>
                  {cartStatus && (
                    <div className="cart-status">
                      <p>{cartStatus}</p>
                    </div>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Products;
