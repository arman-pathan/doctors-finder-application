var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var Doctors = require("./models/Doctors");
var { mongoose } = require("./config/db-connection/mongoose");

// app.use(cors({ origin: "http://13.52.74.16", credentials: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Allow CORS Access Control
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://13.52.74.16:3000/");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//API for searching doctors
app.post("/doctor/doctors", function(req, res) {
  console.log("Inside search ");

  console.log(req.body);
  let conditions;
  if (req.body.name) {
    conditions = { name: req.body.name };
  } else if (req.body.area && req.body.speciality) {
    conditions = {
      $or: [
        {
          $and: [{ area: req.body.area }, { speciality: req.body.speciality }]
        },
        { name: req.body.name }
      ]
    };
  } else {
    conditions = {
      $or: [
        {
          $or: [{ area: req.body.area }, { speciality: req.body.speciality }]
        },

        { name: req.body.name }
      ]
    };
  }

  Doctors.find(conditions)
    .then(response => {
      if (res != null) {
        console.log(response);

        return res.status(200).json(response);
      } else {
        console.log("No data found");
        return res.status(400);
      }
    })
    .catch(err => {
      console.log(err);
      console.log("Error occured while fetching search results");
      return res.status(404).json(err);
    });
});

//API for similar doctors based on their speciality
app.get("/doctor/:speciality", function(req, res) {
  console.log("Inside search ");
  console.log(req.params.speciality);
  Doctors.find({
    speciality: req.params.speciality
  })
    .then(response => {
      if (res != null) {
        console.log(response);

        return res.status(200).json(response);
      } else {
        console.log("No data found");
        return res.status(400);
      }
    })
    .catch(err => {
      console.log(err);
      console.log("Error occured while fetching search results");
      return res.status(404).json(err);
    });
});

//PORT for node.js application
const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
