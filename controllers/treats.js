const express = require("express");
const router = express.Router();
const seed = require("../models/seedtreats.js")
const Treats = require('../models/treats.js');
const User = require('../models/users.js');

//SEED ROUTE
router.get("/seedTreats", (req, res) =>{
  Treats.create(seed, (err, createdTreats) => {
  console.log(createdTreats);
  res.redirect("/treats");
})
})
//index of treats
router.get("/", (req, res) => {
  // res.send("index page");
  Treats.find({}, (err, allTreats) => {
    res.render("index.ejs", {
      treats: allTreats,
      currentUser: req.session.currentUser
    });
  });
});

//show treat
//go to to treats/:id
//show treat req.params.id

router.get("/:id", (req, res) => {
  // res.render("treats/show.ejs");
  Treats.findById(req.params.id, (err, showTreat) => {
      res.render("treats/show.ejs", {
        treats: showTreat,
      })
    })
  });

module.exports = router;
