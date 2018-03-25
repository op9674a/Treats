const express = require("express");
const router = express.Router();
const seed = require("../models/seedtreats.js")
const Treats = require('../models/treats.js');
const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const Locations = require("../models/locations.js")
const url = require("url-parse");
const storage = require("node-localstorage");


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
  res.render("treats/new.ejs");
  res.redirect("/treats");
  currentUser: req.session.currentUser
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

//show all places for treat
//leave messages
router.get("/:id/places", (req, res)=>{
  Treats.places.findById(req.params.id, (err, showPlaces) => {
    res.redirect("treats.places[i]");
    currentUser: req.session.currentUser
    })
  });

//edit treat show page
router.get("/:id/edit", (req, res) => {
  Treats.findById(req.params.id, (err, editTreat)=>{
    res.render("treats/edit.ejs", {
      treats: editTreat,
      currentUser: req.session.currentUser
    });
  })
})

//show location page
//need to name ids differently so they don't conflict
//req.params is a whole object
//find treat id with req.params.treatid
//find location id with req.params.locationid
//show locations matching treat id
//showTreat.locations is an array, iterate and find matching location id
//result is an array
//declare locations
router.get("/:treatid/locations/:locationid", (req, res) => {
  console.log(req.params);
  Treats.findById(req.params.treatid, (err, showTreat) => {
    let result = showTreat.locations.filter((elem, i) => {
      return elem.id === req.params.locationid
    })
    console.log(result);
      res.render("locations/show.ejs", {
      treats:showTreat,
      locations: result[0],
      currentUser: req.session.currentUser
  })
  })
});

// post messages to "/:treatid/locations/:locationid"
router.post("/:treatid/locations/:locationid", (req, res) => {
  User.findOneAndUpdate({_id:req.session.currentUser._id},
    { $push: {messages: req.body.message, treats: req.params.treatid, locations: req.params.locationid}},
    (err, foundUser) => {
      res.redirect("/treats/:treatid/locations/:locationid", {
        treats:showTreat,
        locations: result[0],
        users: {_id:req.session.currentUser._id}
      })
    })
});
//put to treat show page from edit
router.put("/:id", (req, res)=>{
  Treats.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=> {
     res.redirect("/treats/" + req.params.id);
   })
 })

//delete treat
router.delete("/:id", (req, res) => {
  Treats.findByIdAndRemove (req.params.id, (err, deleteTreat)  => {
   res.redirect("/treats");
   })
 });


module.exports = router;
