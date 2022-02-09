import React from "react";
import { Form, Button } from "react-bootstrap/";
import axios from "axios";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function BookingForm({ trainerInfo }) {
  let currentUserId = 1;
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };
  const today = new Date()
    .toISOString()
    .replace(/T.*/, "")
    .split("-")
    .join("-");
  const checkDateTimeValidation = (e, chosenTime, chosenDate) => {
    let bookingLock = 0;
    if (chosenTime != 0) {
      e.target.formBasicTime.nextSibling.classList = "form-text text-success";
    } else {
      e.target.formBasicTime.nextSibling.classList = "form-text text-danger";
      bookingLock++;
    }
    if (chosenDate != "Invalid Date") {
      e.target.formBasicDate.nextSibling.classList = "form-text text-success";
    } else {
      e.target.formBasicDate.nextSibling.classList = "form-text text-danger";
      bookingLock++;
    }
    return bookingLock;
  };
  const handleSubmitBookForm = (e) => {
    e.preventDefault();
    const chosenTime = e.target.formBasicTime.value;
    const chosenDate = new Date(
      e.target.formBasicDate.value
    ).toLocaleDateString("en", options);
    let bookingLock = checkDateTimeValidation(e, chosenTime, chosenDate);
    if (bookingLock == 0) {
      const newAppointmentBody = {
        userId: currentUserId,
        trainerId: trainerInfo._id,
        appointmentDate: chosenDate,
        appointmentHour: chosenTime,
      };
      axios
        .post(
          `http://localhost:4000/api/appointments/efind/`,
          newAppointmentBody
        )
        .then((resData) => {
          if (resData.data.data) {
            Swal.fire({
              position: "top-end",
              color: "red",
              text: "Not Available Choose another time",
              showConfirmButton: false,
              timer: 3000,
            });
          } else {
            axios
              .post(
                `http://localhost:4000/api/appointments/`,
                newAppointmentBody
              )
              .then(() =>
                Swal.fire({
                  icon: "success",
                  position: "center",
                  text: "The Teacher Received Your Request Check your profile to track the status",
                  timer: 3000,
                  confirmButtonColor: "#3085d6",
                })
              )
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => {
          return console.log(`error : ${err.message}`);
        });
    } else {
      Swal.fire({
        position: "top-end",
        color: "red",
        text: "The Date And Time Required",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmitBookForm}>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Pick Date </Form.Label>
          <Form.Control type="date" min={today} />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Pick Time </Form.Label>

          <Form.Select
            aria-label="Default select example"
            required
            defaultValue={0}
          >
            <option hidden disabled value="0">
              Choose an option
            </option>
            <option value="10:00-11:00">10:00-11:00</option>
            <option value="11:00-12:00">11:00-12:00</option>
            <option value="12:00-01:00">12:00-01:00</option>
            <option value="01:00-02:00">01:00-02:00</option>
          </Form.Select>
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Book
        </Button>
      </Form>
    </div>
  );
}

export default BookingForm;
