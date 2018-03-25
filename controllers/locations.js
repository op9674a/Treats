const express = require("express");
const router = express.Router();
const seed = require("../models/seedtreats.js")
const Treats = require('../models/treats.js');
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');
const Locations = require('../models/locations.js');


// show location
router.get("/show/:id", (req, res) => {
  console.log("location show route");
  Locations.findById(req.params.id, (err, showLocation) => {
    console.log(showLocation);
  res.render("locations/show.ejs")
  // show location by treats.locations id
  // Locations.findById(req.params.id, (err, showLocation) => {
  //   console.log(showLocation);
  //   Locations.findOne({"treats._id":req.params.id}, (err, showLocation) => {
  //     console.log(showLocation);
  //     res.render("locations/show.ejs", {
  //       // treats: showTreat,
  //       locations: showLocation,
  //       currentUser: req.session.currentUser
  //     })
  //   })
  })
});

// console.log("this is location show route");
// Treats.findById(req.params.id, (err, showTreat) => {
//   console.log(showTreat);
//   Locations.findOne({"treats._id":req.params.id}, (err, showLocation) => {
//     console.log(showLocation);
//     res.render("locations/show.ejs", {
//       treats: showTreat,
//       locations: showLocation,
//       currentUser: req.session.currentUser
//     })
//   })
// })
// });






module.exports = router;
