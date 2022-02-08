import React from "react";
import { Form, Button } from "react-bootstrap/";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CompleteTrainerData({ currentTrainerName, setCurrentTrainerName }) {
  const checkTheValidation = (e, years, city, price, image) => {
    let addTrainerLock = 0;

    if (city.length >= 3) {
      e.target.formBasicCity.nextSibling.classList = "form-text text-success";
    } else {
      e.target.formBasicCity.nextSibling.classList = "form-text text-danger";
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
      // add new trainer
      let fullName = "yaser123456";
      let email = "test@test.com";
      let password = 123456;

      let newTrainerBody = {
        name: fullName,
        email: email,
        password: password,
        city: city,
        pricePerHour: price,
        image: image,
      };
      axios
        .post(`http://localhost:4000/api/trainers/`, newTrainerBody)
        .then(() => {
          Swal.fire({
            position: "top-end",
            color: "green",
            text: "You have registered successfully",
            showConfirmButton: false,
            background: "#eee",
            timer: 3000,
          });
          setCurrentTrainerName(fullName);
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
          <Form.Control type="number" min={0} step={1} />
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
