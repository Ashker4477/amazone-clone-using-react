import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || password == "") {
      alert("plz fill out fields");
      return false;
    } else if (name.length < 4 || password.length < 6 || email.length < 5) {
      alert("required fields are not accurate");
      return false;
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
          console.log(auth);
          if(auth){
            history.push('/');
          }
        })
        .catch((err) => console.log(err));
      return true;
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register_logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="net fail"
        />
      </Link>
      <div className="register_container">
        <h1>Create Account</h1>
        <form method="post" action="" onSubmit={validateForm}>
          <h5>Your name:</h5>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
          ></input>
          <small className="register_small">
            ! Password must be atleast 6 characters
          </small>

          <h5>Re-enter Password</h5>
          <input
            type="password"
            value={cpassword}
            onChange={(event) => setCPassword(event.target.value)}
          ></input>
          <button type="submit" className="register_register_button">
            Create your Amazone account
          </button>
        </form>
        <p className="register_warning">
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>

        <p className="register_login">
          Already have an account? <Link to="/login"> Sign-In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
