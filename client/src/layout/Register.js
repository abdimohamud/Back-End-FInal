import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SocialProfileSignIn from '../utils/SocialProfileAuth'
import AlertBanner from '../components/AlertBanner';
const Register = (props) => {
  const { registerWithEmail } = useAuth();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [accountType, setAccountType] = useState("");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     fullname: fullname,
  //     email: email,
  //     password: password,
  //     password2: password2,
  //     accountType: accountType
  //   };
  //   console.log(userData);
  // }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerWithEmail(email, password);
      history.push('/login');
    } catch (err) {
      setErrors([err]);
    }
  };




  return (
    <form onSubmit={onSubmit}>
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
    <div>
      <label>Full name:</label>
      <input
        type="text"
        value={fullname}
        onChange={e => setFullname(e.target.value)}
      />
    </div>
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
      <div>
        <label>Confirm Password:</label>
        <input
          type="text"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
        />
      </div>
      <div>
        <input
          type="radio"
          name="accountType"
          checked={accountType === "producer"}
          onChange={() => setAccountType("producer")}
        />
        <label>Producer</label>
      </div>
      <div>
        <input
          type="radio"
          name="accountType"
          checked={accountType === "buyer"}
          onChange={() => setAccountType("buyer")}
        />
        <label>Buyer</label>
      </div>
      <SocialProfileSignIn setErrors={setErrors} />
      <input type="submit" value="Submit" />
    </form>
  );
}
export default Register;