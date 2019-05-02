var mongoose = require("mongoose");

module.exports = mongoose.model(
  "Doctors",
  {
    area: {
      type: String
    },
    speciality: {
      type: String
    },
    name: {
      type: String
    },
    ratings: {
      type: String
    }
  },
  "Doctors"
);
