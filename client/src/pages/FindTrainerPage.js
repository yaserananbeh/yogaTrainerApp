import React from "react";
import SubHeroImage from "../components/SubHeroImage";
import TrainerCardsContainer from "../components/TrainerCardsContainer";
import "../style/FindTrainerPage.scss";

function FindTrainerPage() {
  return (
    <div>
      <SubHeroImage page="Find A Trainer" />
      <TrainerCardsContainer />
    </div>
  );
}

export default FindTrainerPage;
