let mongoose = require("mongoose");
// Setup schema
let trainerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  image: {
    type: String, //not required
  },
  yearsOfExperience: {
    type: Number, //not required
  }
});
// Export Trainer model
let Trainer = (module.exports = mongoose.model("trainers", trainerSchema));
module.exports.get = function (callback, limit) {
  Trainer.find(callback).limit(limit);
};
