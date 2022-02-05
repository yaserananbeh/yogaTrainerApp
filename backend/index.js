const express = require("express");
const app = express();
app.use(express.json());
// Import Mongoose
let mongoose = require("mongoose");
// Import routes
let apiRoutes = require("./api-routes.js");

mongoose.connect("mongodb://localhost/bookingApp", { useNewUrlParser: true });

// if there's a env file it will get the port number from it, other wise will start the server at 4000 port
const PORT = process.env.PORT || 4000;

// Use Api routes in the App
app.get("/", (req, res) => {
  res.status(200).json({ message: "Booking server main interface" });
});

app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
