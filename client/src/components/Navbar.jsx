import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles/navbar.scss';
import logo from '../assets/navbar/navbar-logo.png';
import cart from '../assets/navbar/cart-icon.svg';
import cartBlack from '../assets/navbar/cart-icon-black.svg';

export default function Navbar(props) {
  const [cartAmount] = useState("1");

  function cartAmountIcon(){
    if(cartAmount !== ""){
      return (
        <div className="cart-amount">{cartAmount}</div>
      );
    }
  }

  return (
    <div id="navbar">
      <Link to="/"><img alt="" className="logo" src={logo} /></Link>
      <div className="navbar-options">
        <ul>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/sell-beats">Sell Beats</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/login"><span>Login</span></Link></li>
          <li className="icon-container">
            {cartAmountIcon()}
            <Link to="/cart"><img alt="" src={props.cart === "black" ? cartBlack : cart} /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
