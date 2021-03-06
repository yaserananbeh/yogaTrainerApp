const express = require("express");
const app = express();
// new way to handle parse the request body to a json file
app.use(express.json());
// import cors
let cors = require("cors");
app.use(cors());
// Import Mongoose
let mongoose = require("mongoose");
// Import routes
let apiRoutes = require("./api-routes.js");

// connect to mongoose
mongoose.connect("mongodb://localhost/bookingApp", { useNewUrlParser: true });

// if there's a env file it will get the port number from it, other wise will start the server at 4000 port
const PORT = process.env.PORT || 4000;

// the landing interface for our app
app.get("/", (req, res) => {
  res.status(200).json({ message: "Booking server main interface" });
});
// get the api routes from app-routers.js file
app.use("/api", apiRoutes);

// handle any unexpected route with error response
app.get("*", function (req, res) {
  res.status(404).send({ message: "not found endPoint" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
