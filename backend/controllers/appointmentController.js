// appointmentController.js
// Import appointment model
Appointment = require("../models/appointmentModel");
// Handle index actions
exports.index = function (req, res) {
  Appointment.get(function (err, appointments) {
    if (err) {
      return res.status(404).json({
        status: "can't get all appointments",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Appointments retrieved successfully",
      data: appointments,
    });
  });
};
// Handle create appointment actions
exports.new = function (req, res) {
  let appointment = new Appointment();
  appointment.userId = req.body.userId;
  appointment.trainerId = req.body.trainerId;
  appointment.appointmentDate = req.body.appointmentDate;
  appointment.appointmentHour = req.body.appointmentHour;
  appointment.status = req.body.status ? req.body.status : 0;

  // save the appointment and check for errors
  appointment.save(function (err) {
    if (err) {
      return res.status(400).json({
        status: "error missing body data",
        message: err,
      });
    }
    res.json({
      message: "New appointment created!",
      data: appointment,
    });
  });
};
// Handle view appointment info
exports.view = function (req, res) {
  Appointment.findById(req.params.appointment_id, function (err, appointment) {
    if (err) {
      return res.status(404).send({
        message: "Appointment not found",
      });
    }
    res.json({
      message: "Appointment details loading..",
      data: appointment,
    });
  });
};
// Handle update appointment info
exports.update = function (req, res) {
  Appointment.findById(req.params.appointment_id, function (err, appointment) {
    if (err) {
      return res.status(404).json({
        status: "can't update this appointment",
        message: err,
      });
    }
    appointment.userId = req.body.userId;
    appointment.trainerId = req.body.trainerId;
    appointment.appointmentDate = req.body.appointmentDate;
    appointment.appointmentHour = req.body.appointmentHour;
    appointment.status = req.body.status ? req.body.status : 0;

    // save the appointment and check for errors
    appointment.save(function (err) {
      if (err) {
        return res.status(404).json({
          status: "error",
          message: err,
        });
      }
      res.json({
        message: "Appointment Info updated",
        data: appointment,
      });
    });
  });
};
// Handle delete appointment
exports.delete = function (req, res) {
  Appointment.deleteOne(
    {
      _id: req.params.appointment_id,
    },
    function (err, appointment) {
      if (err) {
        return res.status(404).json({
          status: "error",
          message: err,
        });
      }
      res.json({
        status: "success",
        message: "Appointment deleted",
      });
    }
  );
};
// Handle view appointments that have same trainer id
exports.viewByTrainerId = function (req, res) {
  Appointment.find(
    { trainerId: req.params.trainerId },
    function (err, appointment) {
      if (err) {
        return res.status(404).send({
          message: "Appointment not found",
        });
      }
      res.json({
        message: "Appointment details loading..",
        data: appointment,
      });
    }
  );
};
// Handle view appointments that have same user id
exports.viewByUserId = function (req, res) {
  Appointment.find({ userId: req.params.userId }, function (err, appointment) {
    if (err) {
      return res.status(404).send({
        message: "Appointment not found",
      });
    }
    res.json({
      message: "Appointment details loading..",
      data: appointment,
    });
  });
};
// Handle view appointments that have same appointment trainerId, date and time
exports.viewIfExistAppointment = function (req, res) {
  Appointment.findOne(
    {
      trainerId: req.body.trainerId,
      appointmentDate: req.body.appointmentDate,
      appointmentHour: req.body.appointmentHour
    },
    function (err, appointment) {
      console.log(appointment);
      if (err) {
        return res.status(404).send({
          message: "Appointment not found",
        });
      }
      res.json({
        message: "Appointment details loading..",
        data: appointment,
      });
    }
  );
};
// Handle Bad requests
exports.badRequest = function (req, res) {
  return res.status(400).json({
    status: "bad request",
  });
};
