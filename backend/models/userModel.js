let mongoose = require("mongoose");
// Setup schema
let userSchema = mongoose.Schema({
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
  userRole: {
    type: Number,
    default: 2,
    // 0 for admin, 1 for trainer , 2 for user //////0 admin future work
  },
});
// Export User model
let User = (module.exports = mongoose.model("users", userSchema));
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
