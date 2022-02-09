import React from "react";
import RegisterForm from "../components/RegisterForm";
import "../style/RegisterPage.scss";

function RegisterPage() {
  return (
    <div className="registerPageMainContainer">
      <fieldset border="1">
        <legend>Register</legend>
        <RegisterForm />
      </fieldset>
    </div>
  );
}

export default RegisterPage;
