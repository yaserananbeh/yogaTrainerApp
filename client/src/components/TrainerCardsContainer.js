import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import TrainerCard from "./TrainerCard";
import "../style/TrainerCardsContainer.scss";
function TrainerCardsContainer() {
  const [trainers, setTrainers] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/trainers/`)
      .then((res) => {
        setTrainers(res.data.data);
      })
      .catch((err) => {
        return console.log(`error : ${err.message}`);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "var(--smokeWhite)" }}>
      <div className="trainerCardsMainContainer">
        {trainers ? (
          trainers.map((data, index) => (
            <TrainerCard trainerInfo={data} key={data.email + index} />
          ))
        ) : (
          <h1 className="emptyTrainersMessage">
            No Trainers Available Right Now
          </h1>
        )}
      </div>
    </div>
  );
}

export default TrainerCardsContainer;
