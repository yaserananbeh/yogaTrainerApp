import React from "react";
import { Form, Button } from "react-bootstrap/";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CompleteTrainerData({ currentLoggedInUser }) {
  const navigate = useNavigate();
  const checkTheValidation = (e, years, city, price, image) => {
    let addTrainerLock = 0;

    if (city.length >= 3) {
      e.target.formBasicCity.nextSibling.classList = "form-text text-success";
    } else {
      e.target.formBasicCity.nextSibling.classList = "form-text text-danger";
      addTrainerLock++;
    }
    if (years) {
      e.target.formBasicPeriod.nextSibling.classList = "form-text text-success";
    } else {
      e.target.formBasicPeriod.nextSibling.classList = "form-text text-danger";
      addTrainerLock++;
    }
    if (price) {
      e.target.formBasicPrice.nextSibling.classList = "form-text text-success";
    } else {
      e.target.formBasicPrice.nextSibling.classList = "form-text text-danger";
      addTrainerLock++;
    }

    return addTrainerLock;
  };
  const handleSubmitTrainerData = (e) => {
    e.preventDefault();

    let yearsOfExperience = e.target.formBasicPeriod.value;
    let city = e.target.formBasicCity.value;
    let price = e.target.formBasicPrice.value;
    let image = e.target.formBasicImage.value;

    let addTrainerLock = checkTheValidation(
      e,
      yearsOfExperience,
      city,
      price,
      image
    );
    if (addTrainerLock == 0) {
      let fullName = currentLoggedInUser.name;
      let email = currentLoggedInUser.email;
      let password = currentLoggedInUser.password;

      let newTrainerBody = {
        name: fullName,
        email: email,
        password: password,
        city: city,
        pricePerHour: price,
        image: image,
      };
      axios
        .post(`${process.env.REACT_APP_API_KEY}trainers/`, newTrainerBody)
        .then(() => {
          Swal.fire({
            position: "top-end",
            color: "green",
            text: "Your Data Saved Successfully",
            showConfirmButton: false,
            background: "#eee",
            timer: 3000,
          });
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        position: "top-end",
        color: "red",
        text: "Please follow the form instructions",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmitTrainerData}>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter The City Name" />
          <Form.Text className="text-muted">
            Should be a valid city name
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPeriod">
          <Form.Label>Years Of Experience</Form.Label>
          <Form.Control type="number" min={0} step={1} max={30} />
          <Form.Text className="text-muted">0-30 Years</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price Per Hour</Form.Label>
          <Form.Control type="number" min={0} max={100} step={1} />
          <Form.Text className="text-muted">
            Should be a number of JOD
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage" placeholder="0">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Image Url" />
          <Form.Text className="text-muted">optional</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CompleteTrainerData;
