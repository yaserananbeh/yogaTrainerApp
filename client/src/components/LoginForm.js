import React from "react";
import { Form, Button } from "react-bootstrap/";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginForm() {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const checkPassword = (str) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  };
  const checkTheValidation = (e, email, password) => {
    let loginLock = 0;
    if (validateEmail(email)) {
      e.target.formBasicEmail.nextSibling.classList = "form-text text-success";
      e.target.formBasicEmail.nextSibling.style.display = "none";
    } else {
      e.target.formBasicEmail.nextSibling.classList = "form-text text-danger";
      e.target.formBasicEmail.nextSibling.style.display = "block";
      e.target.formBasicEmail.nextSibling.innerText = "Should be a valid email";
      loginLock++;
    }
    if (checkPassword(password)) {
      e.target.formBasicPassword.nextSibling.classList =
        "form-text text-success";
      e.target.formBasicPassword.nextSibling.style.display = "none";
    } else {
      e.target.formBasicPassword.nextSibling.classList =
        "form-text text-danger";
      e.target.formBasicPassword.nextSibling.style.display = "block";
      e.target.formBasicPassword.nextSibling.innerText =
        "Should be a valid password";
      loginLock++;
    }
    return loginLock;
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    let email = e.target.formBasicEmail.value;
    let password = e.target.formBasicPassword.value;
    let userType = e.target.formBasicUserType.value;
    let loginLock = checkTheValidation(e, email, password);
    if (loginLock == 0) {
      // get users
      axios
        .get(`http://localhost:4000/api/users/find/${email}`)
        .then((userData) => {
          let resUserData = userData.data.data;
          if (
            resUserData &&
            resUserData.password == password &&
            resUserData.userRole == userType
          ) {
            if (resUserData.userRole == 1) {
              console.log("trainer");
            } else {
              console.log("user");
            }
          } else {
            console.log("bad credentials");
          }
        })
        .catch((err) => {
          return console.log(`error : ${err.message}`);
        });
    } else {
      console.log("not valid");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserType">
          <Form.Label>Register As </Form.Label>

          <Form.Select
            aria-label="Default select example"
            required
            defaultValue={2}
          >
            <option hidden disabled>
              Choose an option
            </option>
            <option value="2">User</option>
            <option value="1">Trainer</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Group className="mb-3">
          <Form.Label>
            You don't have an account ? <Link to="/register">Register </Link>
          </Form.Label>
        </Form.Group>
      </Form>
    </div>
  );
}

export default LoginForm;
