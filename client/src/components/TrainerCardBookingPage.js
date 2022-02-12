import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material/";
import {  blueGrey,lightBlue } from "@mui/material/colors";

export default function RecipeReviewCard({ trainerInfo }) {
  let options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="trainerOneCardMainContainer">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
            {trainerInfo.name[0]}
          </Avatar>
        }
        title={trainerInfo.name}
        subheader={
          "Join Date : " +
          new Date(trainerInfo.create_date).toLocaleDateString("en", options)
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={
          trainerInfo.image
            ? "../assets/images/trainer-2.jpg"
            : "../assets/images/defaultTrainerImage.png"
        }
        alt={trainerInfo.name}
      />
      <CardContent sx={{ color: lightBlue[600] }}>
        <Typography gutterBottom variant="h6" component="div">
          Price Per Hour : {trainerInfo.pricePerHour} JOD
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          Experience : {trainerInfo.yearsOfExperience} Years
        </Typography>
        <Typography variant="body2" color="text.secondary">
          City : {trainerInfo.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email : {trainerInfo.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone : {trainerInfo.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
