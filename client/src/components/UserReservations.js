export default UserReservations;
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

export default function UserReservations() {
 
 const userId  = localStorage.getItem("loggedUserId") ? JSON.parse(localStorage.getItem("loggedUserId")) : "";
 const rows=[];
 return (
  <div style={{ width: "90%", margin: "auto" }}>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
     <TableHead>
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
         {row.status == 0
          ? "Pending"
          : row.status == 1
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