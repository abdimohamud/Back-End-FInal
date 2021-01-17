import React, { useState } from "react";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    axios.post('/users/login', userData)
      .then(res => {
        console.log(res.data.token);
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
