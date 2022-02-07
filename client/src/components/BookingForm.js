import React from "react";
import { Form, Button } from "react-bootstrap/";
import axios from "axios";
import { Link } from "react-router-dom";

function BookingForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Pick Date</Form.Label>
          <Form.Control type="date" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserType">
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
            <option value="10:00-11:00">11:00-12:00</option>
            <option value="10:00-11:00">12:00-01:00</option>
            <option value="10:00-11:00">01:00-02:00</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Book
        </Button>
      </Form>
    </div>
  );
}

export default BookingForm;
