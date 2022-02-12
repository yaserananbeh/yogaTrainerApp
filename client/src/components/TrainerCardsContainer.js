import React, { useEffect, useState } from "react";
import axios from "axios";
import TrainerCard from "./TrainerCard";
import "../style/TrainerCardsContainer.scss";
import TrainerSearchBar from "./TrainerSearchBar";
function TrainerCardsContainer() {
  const [trainers, setTrainers] = useState(null);
  const [word, setWord] = React.useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}trainers/`)
      .then((res) => {
        setTrainers(res.data.data);
      })
      .catch((err) => {
        return console.log(`error : ${err.message}`);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "var(--smokeWhite)" }}>
      <TrainerSearchBar trainers={trainers} setWord={setWord} />
      <div className="trainerCardsMainContainer">
        {trainers ? (
          word ? (
            trainers
              .filter(
                (data) => data.name.toLowerCase() === word.toLocaleLowerCase()
              )
              .map((data, index) => (
                <TrainerCard trainerInfo={data} key={data.email + index} />
              ))
          ) : (
            trainers.map((data, index) => (
              <TrainerCard trainerInfo={data} key={data.email + index} />
            ))
          )
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
