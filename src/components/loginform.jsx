import React from "react";
import { Link, Outlet } from "react-router-dom";
function Loginform() {
  return (
    <>
      <div className="loginForm">
        <h1>"Passion To Learn"</h1>
        <form className="logForm">
          <div class="mb-3 loginFormGroup">
            <input
              type="text"
              className="form-control loginFormGroupControl"
              placeholder="Username"
              id="Username"

            />
          </div>
          <div class="mb-3 loginFormGroup">
            <input
              type="password"
              className="form-control loginFormGroupControl"
              placeholder="Password"
              id="exampleInpuPassword"
            />
          </div>
          

          <button variant="primary" type="submit" className="button w-100">
          <Link to="/dashboard">Login</Link>
          </button>
          <Link to="/registerPage" className="linktoreg">New User , Register here</Link>
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default Loginform;
