import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <nav>
        <Link to="/"><div className="logo">Shop</div></Link>
        
        <NavLink to="/cart"><span>Cart:{cart.length}</span></NavLink>  
 
      </nav>
    </div>
  );
};

export default Navbar;
