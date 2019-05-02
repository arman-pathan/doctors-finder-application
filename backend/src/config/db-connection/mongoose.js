var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://root:root123@cluster0-xee3b.mongodb.net/DoctorsApplication"
  )
  .then(() => console.log("Connected to mongoDB database on MongoDB Atlas"))
  .catch(err => console.error("Could not connect to database...", err));

module.exports = { mongoose };
