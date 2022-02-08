import React, { useEffect, useState } from "react";
import SubHeroImage from "../components/SubHeroImage";
import CompleteTrainerData from "../components/CompleteTrainerData";
import TrainerAppointmentsTable from "../components/TrainerAppointmentsTable";
import axios from "axios";
function TrainerPage() {
  const currentTrainerName = "testssssssssssssssssssssssssssssssssssssssssssssssssssssssss";
  const [trainerData, setTrainerData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/trainers/find/${currentTrainerName}`)
      .then((trainerData) => {
        let resTrainerData = trainerData.data.data;
        setTrainerData(resTrainerData);
        return resTrainerData;
      })
      .then((res) => {
        if (res.length) {
          axios
            .get(`http://localhost:4000/api/appointments/tfind/${res._id}`)
            .then((res) => {
              let appointmentsData = res.data.data;
              setAppointmentsData(appointmentsData);
              return appointmentsData;
            });
        }
      })
      .catch((err) => {
        return console.log(`error : ${err.message}`);
      });
  }, []);

  return (
    <div>
      <SubHeroImage page="Trainer Dashboard" />
      {trainerData.length ? (
        appointmentsData.length ? (
          <TrainerAppointmentsTable appointmentsData={appointmentsData} />
        ) : (
          "There's No Appointments"
        )
      ) : (
        <CompleteTrainerData trainerData={trainerData} />
      )}
    </div>
  );
}

export default TrainerPage;
