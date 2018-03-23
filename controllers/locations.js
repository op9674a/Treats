const express = require("express");
const router = express.Router();
const seed = require("../models/seedtreats.js")
const Treats = require('../models/treats.js');
const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const Locations = require('../models/treats.js');

//show location
router.get("/show/:id", (req, res) => {
  // res.render("locations/show.ejs");
  Locations.findById(req.params.id, (err, showLocation) => {
    res.render("locations/show.ejs", {
        location: showLocation
    })
  })
});

  // Treats.findById(req.params.id, (err, showTreat) => {
  //   Treats.locations.findById(req.params.id, (err, showLocation) => {
  //     res.render("locations/show.ejs", {
  //       treats: showTreat,
  //       location: showLocation,
  //       currentUser: req.session.currentUser
  //     })
  //   })
  // })



module.exports = router;
