// Initialize express router
let router = require("express").Router();
// Set default API endpoint response
router.get("/", function (req, res) {
  res.json({
    status: "Api index",
    message:
      "You can control users, trainers and appointments data from this end point",
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
  .delete(userController.delete)
  .post(userController.badRequest);
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
  .delete(trainerController.delete)
  .post(trainerController.badRequest);
router.route("/trainers/find/:email").get(trainerController.viewByEmail);
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
// .post(appointmentController.badRequest);

router
  .route("/appointments/ufind/:userId")
  .get(appointmentController.viewByUserId);
router
  .route("/appointments/tfind/:trainerId")
  .get(appointmentController.viewByTrainerId);
router
  .route("/appointments/efind/")
  .post(appointmentController.viewIfExistAppointment);

// Export API routes
module.exports = router;
