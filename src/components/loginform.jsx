import React from "react";
import { Link, Outlet } from "react-router-dom";
function Loginform() {
  return (
    <>
      {/* <div className="loginForm">
      <h1>"Passion To Learn"</h1>
      <Form className="logForm">
        <Form.Group className="mb-3 loginFormGroup" controlId="formBasicEmail">
          
          <Form.Control type="Username" placeholder="Username" className="loginFormGroupControl" />
         
        </Form.Group>

        <Form.Group className="mb-3 loginFormGroup" controlId="formBasicPassword">
          
          <Form.Control type="password" placeholder="Password"  className="loginFormGroupControl"/>
        </Form.Group>
       
        <Button variant="primary" type="submit" className="button w-100">
          <Link to="/dashboard">Login</Link>
        </Button>
      </Form>
    </div> */}
      <div className="loginForm">
        <h1>"Passion To Learn"</h1>
        <form className="logForm">
          <div class="mb-3 loginFormGroup">
            <input
              type="Username"
              class="form-control"
              placeholder="Username"
              id="exampleInputUsername"
              className="loginFormGroupControl"
            />
          </div>
          <div class="mb-3 loginFormGroup">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              id="exampleInpuPassword"
              className="loginFormGroupControl"
            />
          </div>
          

          <button variant="primary" type="submit" className="button w-100">
          <Link to="/dashboard">Login</Link>
          </button>
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default Loginform;
