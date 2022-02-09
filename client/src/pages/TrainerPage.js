import React, { useEffect, useState, useContext } from "react";
import SubHeroImage from "../components/SubHeroImage";
import axios from "axios";
import { LoggedUserContext } from "../App";
import TrainerAppointmentsTable from "../components/TrainerAppointmentsTable";
import CompleteTrainerData from "../components/CompleteTrainerData";

function Test() {
  const { currentLoggedInUser, setCurrentLoggedInUser } =
    useContext(LoggedUserContext);
  const [CurrentTrainerEmail, setCurrentTrainerEmail] = useState(null);
  const [trainerData, setTrainerData] = useState(null);
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [test, setTest] = useState(0);

  useEffect(() => {
    if (currentLoggedInUser.email) {
      setCurrentTrainerEmail(currentLoggedInUser.email);
      axios
        .get(
          `http://localhost:4000/api/trainers/find/${currentLoggedInUser.email}`
        )
        .then((trainerData) => {
          let resTrainerData = trainerData.data.data;
          return resTrainerData;
        })
        .then((resTrainerData) => {
          if (resTrainerData) {
            setTrainerData(resTrainerData);
            axios
              .get(
                `http://localhost:4000/api/appointments/tfind/${resTrainerData._id}`
              )
              .then((res) => {
                let appointmentsData = res.data.data;
                setAppointmentsData(appointmentsData);
                return appointmentsData;
              });
          }
        });
    }
  }, [currentLoggedInUser]);

  return (
    <div>
      <SubHeroImage page="Trainer Dashboard" />
      {trainerData ? (
        <TrainerAppointmentsTable appointmentsData={appointmentsData} />
      ) : (
        <CompleteTrainerData
          test={test}
          setTest={setTest}
          currentLoggedInUser={currentLoggedInUser}
          setCurrentLoggedInUser={setCurrentLoggedInUser}
        />
      )}
    </div>
  );
}

export default Test;
