import React from "react";
import "./Nav.css";
import { BsCartFill } from "react-icons/bs";




const Nav = ({ cart, openModal }) => {

  return (
    <nav className="navbar">

      <h1>PUBG Gun Store</h1>
        <div onClick={openModal} className="cart-counter">
          <span>{cart.length}</span>
          <BsCartFill className="icon" color="#fff" />
        </div>
    </nav>
  );
};

export default Nav;
