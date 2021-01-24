import React, { useState, useEffect } from 'react';
import { Link,useHistory } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import './styles/navbar.scss';
import logo from '../assets/navbar/navbar-logo.png';
import cart from '../assets/navbar/cart-icon.svg';
import cartBlack from '../assets/navbar/cart-icon-black.svg';

const Navbar=() => {
  let history = useHistory();
  const { user, signout } = useAuth();
  const[loggedIn, setLoggedIn] = useState(null)
  const [cartAmount] = useState("1");
  console.log(user)
 useEffect(()=>{
  if (user){
    setLoggedIn(!loggedIn)
  }
},[ user])
const handleSignOut = () => {
  signout()
  history.push('/login')
  setLoggedIn(false)
}
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
            loggedIn? <span>Welcome {user.displayName}</span>:null
      }
      </span>
      <div className="navbar-options">
        <ul>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/sell-beats">Sell Beats</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
          {
            loggedIn?<li onClick={handleSignOut}>Logout</li>:<li><Link to="/login"><span>Login</span></Link></li>
          }
          
          <li className="icon-container">
            {cartAmountIcon()}
            <Link to="/cart"><img alt="" src={cart === "black" ? cartBlack : cart} /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;