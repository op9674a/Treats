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

//create new treat
//new page inputs
//redirect to main
router.get("/new", (req, res)=>{
  res.render("new.ejs");
  res.redirect("/treats");
})

//post created from new to main
router.post("/", (req, res) => {
  Treats.create(req.body, (err, addNewTreat)=>{
    res.redirect("/treats");
  })
});

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
        currentUser: req.session.currentUser
      })
    })
  });

//show place
//go to treats/:id/places/:id"
//show places req.params.id
router.get("/:id/places", (req, res)=>{
  Treats.places.findById(req.params.id, (err, showPlace) => {
    res.redirect("treats.places[i]", {
      // places:showPlace,
      })
    })
  });

//edit treat show page
router.get("/:id/edit", (req, res) => {
  res.send("edit treat show page");
})



router.put("/:id", (req, res)=>{
  console.log(req.body);
})

router.delete("/", (req, res) => {
  Treats.splice(req.params.index, 1);
  res.redirect("/");
})

module.exports = router;
