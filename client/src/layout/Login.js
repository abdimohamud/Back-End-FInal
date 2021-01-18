import React, { useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory, Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { setCurrentUser } from '../state/actions/index';
import { GoogleLoginButton } from "../components/GoogleLoginButton";
const Login= ()  => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const styles ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '300px',
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    axiosWithAuth()
    .post('http://localhost:5000/users/login', userData)
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
        dispatch(setCurrentUser());
        history.push("/");
      })
  }

  return (
    <form onSubmit={onSubmit} style={styles}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
      <GoogleLoginButton/>
      <p>Dont have an account?<Link to="/sign-up"> Sign Up!</Link></p>
    </form>
  );
}
export default Login