import React, { useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
function RegisterForm() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const register = () => {
    axios.post("http://localhost:8080/register", {
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    })
  };
  return (
    <>
      <div className="loginForm">
        <h1>"Passion To Learn"</h1>
        <form className="logForm">
          <div class="mb-3 loginFormGroup">
            <input
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
                
              }}
              className="form-control loginFormGroupControl"
              placeholder="Username"
              id="Username"
            />
          </div>
          <div class="mb-3 loginFormGroup">
            <input
              type="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
                
              }}
              className="form-control loginFormGroupControl"
              placeholder="Email"
              id="Username"
            />
          </div>
          <div class="mb-3 loginFormGroup">
            <input
              type="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
                
              }}
              className="form-control loginFormGroupControl"
              placeholder="Password"
              id="exampleInpuPassword"
            />
          </div>

          <button variant="primary" type="submit" className="button w-100" >
            <Link to="/dashboard" onClick={register}>Register</Link>
          </button>
          <Link to="/" className="linktoreg">
            Already a User , Signin here
          </Link>
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default RegisterForm;
