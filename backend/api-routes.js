// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});

// Import user controller
let userController = require("./controllers/userController");
// User routes
router.route("/users").get(userController.index).post(userController.new);
router
  .route("/users/:user_id")
  .get(userController.view)
  .put(userController.update)
  .delete(userController.delete);
router.route("/users/find/:user_email").get(userController.viewByEmail);

// Import trainer controller
let trainerController = require("./controllers/trainerController");
// Trainer routes
router
  .route("/trainers")
  .get(trainerController.index)
  .post(trainerController.new);
router
  .route("/trainers/:trainer_id")
  .get(trainerController.view)
  .put(trainerController.update)
  .delete(trainerController.delete);
router.route("/trainers/find/:name").get(trainerController.viewByName);
router
  .route("/trainers/greater/:price")
  .get(trainerController.viewByGreaterPrice);
router.route("/trainers/less/:price").get(trainerController.viewByLessPrice);
// Import appointment controller
let appointmentController = require("./controllers/appointmentController");
// Appointment routes
router
  .route("/appointments")
  .get(appointmentController.index)
  .post(appointmentController.new);
router
  .route("/appointments/:appointment_id")
  .get(appointmentController.view)
  .put(appointmentController.update)
  .delete(appointmentController.delete);
router.route("/appointments/ufind/:userId").get(appointmentController.viewByUserId);
router.route("/appointments/tfind/:trainerId").get(appointmentController.viewByTrainerId);
// Export API routes
module.exports = router;
