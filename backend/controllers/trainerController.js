// trainerController.js
// Import trainer model
Trainer = require("../models/trainerModel");
// Handle index actions
exports.index = function (req, res) {
  Trainer.get(function (err, trainers) {
    if (err) {
      return res.status(404).json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Trainers retrieved successfully",
      data: trainers,
    });
  });
};
// Handle create trainer actions
exports.new = function (req, res) {
  let trainer = new Trainer();
  trainer.name = req.body.name ? req.body.name : trainer.name;
  trainer.email = req.body.email;
  trainer.password = req.body.password;
  trainer.phone = req.body.phone;
  trainer.city = req.body.city;
  trainer.pricePerHour = req.body.pricePerHour;
  trainer.image = req.body.image ? req.body.image : "defaultImage";
  trainer.yearsOfExperience = req.body.yearsOfExperience;

  // save the trainer and check for errors
  trainer.save(function (err) {
    if (err) {
      return res.status(404).json({
        status: "error",
        message: err,
      });
    }
    res.json({
      message: "New trainer created!",
      data: trainer,
    });
  });
};
// Handle view trainer info
exports.view = function (req, res) {
  Trainer.findById(req.params.trainer_id, function (err, trainer) {
    if (err) {
      return res.send({
        message: "Trainer not found",
      });
    }
    res.json({
      message: "Trainer details loading..",
      data: trainer,
    });
  });
};
// Handle update trainer info
exports.update = function (req, res) {
  Trainer.findById(req.params.trainer_id, function (err, trainer) {
    if (err) {
      return res.status(404).json({
        status: "error",
        message: err,
      });
    }
    trainer.name = req.body.name ? req.body.name : trainer.name;
    trainer.email = req.body.email;
    trainer.password = req.body.password;
    trainer.phone = req.body.phone;
    trainer.city = req.body.city;
    trainer.pricePerHour = req.body.pricePerHour;
    trainer.image = req.body.image ? req.body.image : "defaultImage";
    trainer.yearsOfExperience = req.body.yearsOfExperience;

    // save the trainer and check for errors
    trainer.save(function (err) {
      if (err) {
        return res.status(404).json({
          status: "error",
          message: err,
        });
      }
      res.json({
        message: "Trainer Info updated",
        data: trainer,
      });
    });
  });
};
// Handle delete trainer
exports.delete = function (req, res) {
  Trainer.deleteOne(
    {
      _id: req.params.trainer_id,
    },
    function (err, trainer) {
      if (err) {
        return res.status(404).json({
          status: "error",
          message: err,
        });
      }
      res.json({
        status: "success",
        message: "Trainer deleted",
      });
    }
  );
};
exports.viewByName = function (req, res) {
  Trainer.find({ name: req.params.name }, function (err, trainer) {
    if (err) {
      return res.send({
        message: "Trainer not found",
      });
    }
    res.json({
      message: "Trainer details loading..",
      data: trainer,
    });
  });
};

exports.viewByGreaterPrice = function (req, res) {
  Trainer.find(
    { pricePerHour: { $gt: req.params.price } },
    function (err, trainer) {
      if (err) {
        return res.send({
          message: "Trainer not found",
        });
      }
      res.json({
        message: "Trainer details loading..",
        data: trainer,
      });
    }
  );
};
exports.viewByLessPrice = function (req, res) {
  Trainer.find(
    { pricePerHour: { $lt: req.params.price } },
    function (err, trainer) {
      if (err) {
        return res.send({
          message: "Trainer not found",
        });
      }
      res.json({
        message: "Trainer details loading..",
        data: trainer,
      });
    }
  );
};