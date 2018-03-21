const express = require("express");
const router = express.Router();
const Treats = require('../models/treats.js');

module.exports = router;

//show treat
router.get("/:id", (req, res) => {
  res.render("treats/show.ejs");
  // Treats.findById(req.params.id, (err, showTreat) => {
  //     res.render("treats/show.ejs", {
  //       treats: showTreat
    })
  // })
// });
