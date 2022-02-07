import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubHeroImage from "../components/SubHeroImage";
import TrainerCardBookingPage from "../components/TrainerCardBookingPage";
import BookingForm from "../components/BookingForm";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function BookingPage() {
  let { trainerId } = useParams();
  const [trainerInfo, setTrainerInfo] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/trainers/${trainerId}`)
      .then((res) => {
        setTrainerInfo(res.data.data);
        setLoader(false);
      })
      .catch((err) => {
        return console.log(`error : ${err.message}`);
      });
  }, [loader]);
  return (
    <div>
      <SubHeroImage page="Booking Page" />
      <Container>
        {trainerInfo && (
          <Row>
            <Col>
              <TrainerCardBookingPage trainerInfo={trainerInfo} />
            </Col>
            <Col>
              <BookingForm/>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default BookingPage;
