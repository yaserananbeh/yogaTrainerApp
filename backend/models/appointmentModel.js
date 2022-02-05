// appointmentModel.js
let mongoose = require("mongoose");
// Setup schema
let appointmentSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  trainerId: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  appointmentHour: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
  status:{
    type: Number,
    default:0
    // 0 pending // 1 accepted // 2 rejected
  }
  
});
// Export Appointment model
let Appointment = (module.exports = mongoose.model("appointments", appointmentSchema));
module.exports.get = function (callback, limit) {
  Appointment.find(callback).limit(limit);
};
