import React, { useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { setCurrentUser } from '../state/actions/index';
const Login= ()  => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
    <form onSubmit={onSubmit}>
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
    </form>
  );
}
export default Login