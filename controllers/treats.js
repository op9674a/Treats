const express = require("express");
const router = express.Router();
const Treats = require('../models/treats.js');

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
router.get("/:id", (req, res) => {
  // res.render("treats/show.ejs");
  Treats.findById(req.params.id, (err, showTreat) => {
      res.render("treats/show.ejs", {
        treats: showTreat
    })
  })
});

module.exports = router;
