import React, { useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from '../assets/navbar/navbar-logo.png';
import cart from '../assets/navbar/cart-icon.svg';
import cartBlack from '../assets/navbar/cart-icon-black.svg';
import './styles/navbar.scss';

const Navbar = (props) => {
  let history = useHistory()
  let link = useLocation()
  const user = useSelector(state => state.CURRENT_USER);
  const isUserAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };
  useEffect(() => {
    if (link.pathname!== "/"){
      return isUserAuthenticated()
    }

  },[link.pathname])
  const [cartAmount] = useState("1");

  const handleLogout = () => {
    localStorage.clear();
    history.push('/')
  };

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
      <span>
      {
            isUserAuthenticated()? <span>Welcome {user.fullname}</span>:null
      }
      </span>
      <div className="navbar-options">
        <ul>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/sell-beats">Sell Beats</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
          {
            isUserAuthenticated()?<li onClick={handleLogout}>Logout</li>:<li><Link to="/login"><span>Login</span></Link></li>
          }
          
          <li className="icon-container">
            {cartAmountIcon()}
            <Link to="/cart"><img alt="" src={props.cart === "black" ? cartBlack : cart} /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar