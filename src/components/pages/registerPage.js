import React from "react";
import RegisterForm from "../registerform";
function RegisterPage() {
  return (
    <div className="loginParent">
      <img
        className="rounded-circle"
        src={require("../images/humble.jpg")}
        style={{ width: "300px", height: "300px", border: "3px solid #EF115E" }}
        alt="LoginImage"
      ></img>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
