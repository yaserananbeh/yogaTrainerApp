import React from "react";
import LoginForm from "../components/LoginForm";
import "../style/LoginPage.scss";

function LoginPage() {
  return (
    <div className="loginPageMainContainer">
      <fieldset>
        <legend>Login</legend>
        <LoginForm />
      </fieldset>
    </div>
  );
}

export default LoginPage;
