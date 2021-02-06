import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const signin = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div className="logo">
      <Link to="/">
        <img
          className="login_logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="net fail"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form method="post" action="/login">
          <h5>E-mail:</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={signin} className="login_signin_button">
            Sign-in
          </button>
        </form>
        <p>
          By Signing-in You Are Agree to the Amazone Conditions of use and
          Sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
        <button onClick={register} className="login_register_button">
          Create Your Amazone Account
        </button>
      </div>
    </div>
  );
}

export default Login;
