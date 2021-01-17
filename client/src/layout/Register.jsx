import React, { useState } from "react";

export default function Register(props) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [accountType, setAccountType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullname: fullname,
      email: email,
      password: password,
      password2: password2,
      accountType: accountType
    };
    console.log(userData);
  }

  return (
    <form onSubmit={onSubmit}>
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
      <input type="submit" value="Submit" />
    </form>
  );
}
