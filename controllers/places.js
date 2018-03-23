const express = require("express");
const router = express.Router();
const Places = require('../models/places.js');


//show place
router.get("/:id", (req, res) => {
  // res.render("places/show.ejs");
  Places.findById(req.params.id, (err, showPlace) => {
      res.render("places/show.ejs", {
        places: showPlace
    })
  })
});

module.exports = router;
