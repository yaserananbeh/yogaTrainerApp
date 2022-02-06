import React from "react";
import { Form, Button } from "react-bootstrap/";
import axios from "axios";
import { Link } from "react-router-dom";

function RegisterForm() {
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
  const checkTheValidation = (e, fullName, email, password, password2) => {
    let registerLock = 0;
    if (validateEmail(email)) {
      e.target.formBasicEmail.nextSibling.classList = "form-text text-success";
    } else {
      e.target.formBasicEmail.nextSibling.classList = "form-text text-danger";
      registerLock++;
    }
    if (fullName.length >= 4) {
      e.target.formBasicFullName.nextSibling.classList =
        "form-text text-success";
    } else {
      e.target.formBasicFullName.nextSibling.classList =
        "form-text text-danger";

      registerLock++;
    }
    if (checkPassword(password)) {
      e.target.formBasicPassword.nextSibling.classList =
        "form-text text-success";
    } else {
      e.target.formBasicPassword.nextSibling.classList =
        "form-text text-danger";
      registerLock++;
    }
    if (password == password2 && checkPassword(password2)) {
      e.target.formBasicPassword2.nextSibling.classList =
        "form-text text-success";
    } else {
      e.target.formBasicPassword2.nextSibling.classList =
        "form-text text-danger";
      registerLock++;
    }
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    let fullName = e.target.formBasicFullName.value;
    let email = e.target.formBasicEmail.value;
    let password = e.target.formBasicPassword.value;
    let password2 = e.target.formBasicPassword2.value;
    let userType = e.target.formBasicUserType.value;
    let registerLock = checkTheValidation(
      e,
      fullName,
      email,
      password,
      password2
    );
    if (registerLock == 0) {
      // add new user
      let newUserBody = {
        name: fullName,
        email: email,
        password: password,
        userType: userType,
      };
      axios
        .post(`http://localhost:4000/api/users/`, newUserBody)
        .then((usersData) => console.log(usersData))
        .catch((err) => console.log(err));
    } else {
      console.log("can't register");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmitRegister}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
          <Form.Text className="text-muted">
            Should be 4 characters at least
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">Should be a valid email</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            Should be at least 8 length, with at least a symbol, upper and lower
            case letters and a number
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
          <Form.Text className="text-muted">
            Should match the first password.
          </Form.Text>
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
          Register
        </Button>
        <Form.Group className="mb-3">
          <Form.Label>
            You have an account ? <Link to="/login">Sign in </Link>
          </Form.Label>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RegisterForm;
