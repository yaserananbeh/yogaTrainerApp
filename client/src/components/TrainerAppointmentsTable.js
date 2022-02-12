import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Swal from "sweetalert2";

export default function BasicTable({ appointmentsData }) {
  const [success, setSuccess] = React.useState(false);
  const rows = appointmentsData ? appointmentsData : [];
  const handleSubmitNewStatus = (e, chosenAppointment) => {
    e.preventDefault();
    let newState = e.target.newStatus.value;
    if (newState !== -1) {
      chosenAppointment.status = Number(newState);
      axios
        .put(
          `${process.env.REACT_APP_API_KEY}appointments/${chosenAppointment._id}`,
          chosenAppointment
        )
        .then(() => {
          Swal.fire({
            position: "top-end",
            color: "green",
            text: "The status updated Successfully",
            showConfirmButton: false,
            background: "#eee",
            timer: 3000,
          });
        })
        .catch((err) => console.log(err));
      setSuccess(!success);
    } else {
      Swal.fire({
        position: "top-end",
        color: "red",
        text: "Choose an option",
        showConfirmButton: false,
        background: "#eee",
        timer: 1000,
      });
    }
  };
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h1>Your Appointments</h1>
      <TableContainer component={Paper} className="appointmentsTable">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="TableHead">
            <TableRow>
              <TableCell>NO.</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Lecture Date</TableCell>
              <TableCell align="right">Lecture Hour</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Edit Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="right">{row.userId}</TableCell>
                <TableCell align="right">{row.appointmentDate}</TableCell>
                <TableCell align="right">{row.appointmentHour}</TableCell>
                <TableCell align="right">
                  {row.status === 0
                    ? "Pending"
                    : row.status === 1
                    ? "Accepted"
                    : "Rejected"}
                </TableCell>
                <TableCell align="right">
                  <form onSubmit={(e) => handleSubmitNewStatus(e, row)}>
                    <select name="newStatus" id="newStatus" defaultValue={-1}>
                      <option value={-1} hidden disabled>
                        Choose
                      </option>
                      <option value={0}>Pending</option>
                      <option value={1}>Accept</option>
                      <option value={2}>Reject</option>
                    </select>
                    <button className="btn btn-primary">Edit</button>
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
