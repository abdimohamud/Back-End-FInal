import React, { useState } from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SocialProfileSignIn from '../utils/SocialProfileAuth'
import AlertBanner from '../components/AlertBanner';

const Login =() => {
  const { loginWithEmail } = useAuth();
  const [errors, setErrors] = useState([]);
  const history = useHistory();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
    } else {
      try {
        await loginWithEmail(email, password);
        history.push('/');
      } catch (err) {
        setErrors([err]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:'50%', marginLeft:'auto', marginRight:'auto'}}>
            {errors.length > 0 &&
          errors.map((error, i) => (
            <AlertBanner
              key={i}
              className="bg-red-300"
              message={error.message}
              close={() => {
                setErrors(errors.filter((err) => err.code !== error.code));
              }}
            />
          ))}
      <div style={{display:'flex'}}>
        <label style={{width:'100%'}}>Email:
        <input
          type="text"
          style={{width:'100%'}}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        </label>
      </div>
      <div style={{display:'flex'}}>
        <label style={{width:'100%'}}>Password:
        <input
          type="text"
          style={{width:'100%'}}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        </label>
      </div>
      <input type="submit" value="Submit" style={{width:'100%'}}/>
      <SocialProfileSignIn setErrors={setErrors} />
    </form>
  );
}
export default Login;