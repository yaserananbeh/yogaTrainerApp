import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red,blueGrey } from "@mui/material/colors";
import BookIcon from "@mui/icons-material/Book";
import Button from "@mui/material/Button";

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
        action={
          <IconButton aria-label="book">
            <BookIcon />
          </IconButton>
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
            ? "./assets/images/trainer-2.jpg"
            : "./assets/images/defaultTrainerImage.png"
        }
        alt={trainerInfo.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
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
      <CardActions disableSpacing>
        <Button variant="contained" size="medium">
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
