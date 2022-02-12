import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubHeroImage from "../components/SubHeroImage";
import TrainerCardBookingPage from "../components/TrainerCardBookingPage";
import BookingForm from "../components/BookingForm";
import "../style/BookingPage.scss";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function BookingPage() {
  let { trainerId } = useParams();
  const [trainerInfo, setTrainerInfo] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}trainers/${trainerId}`)
      .then((res) => {
        setTrainerInfo(res.data.data);
        setLoader(false);
      })
      .catch((err) => {
        return console.log(`error : ${err.message}`);
      });
  }, [loader]);
  return (
    <div className="bookingPageMainContainer">
      <SubHeroImage page="Booking Page" />
      <Container className="mainContainer">
        {trainerInfo && (
          <Row className="mainContainerRow">
            <Col>
              <TrainerCardBookingPage trainerInfo={trainerInfo} />
            </Col>
            <Col>
              <BookingForm trainerInfo={trainerInfo} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default BookingPage;
