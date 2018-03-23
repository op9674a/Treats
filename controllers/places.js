const express = require("express");
const router = express.Router();
const seed = require("../models/seedtreats.js")
const Treats = require('../models/treats.js');
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//SEED ROUTE
router.get("/seedTreats", (req, res) =>{
  Treats.create(seed, (err, createdTreats) => {
  console.log(createdTreats);
  res.redirect("/treats");
})
})
//show place
router.get("/show", (req, res) => {
  res.send("place show page");
  });

//create new treat
//new page inputs
//redirect to main
// router.get("/new", (req, res)=>{
//   res.render("treats/new.ejs");
//   res.redirect("/treats");
// })

//post created from new to main
// router.post("/", (req, res) => {
//   Treats.create(req.body, (err, addNewTreat)=>{
//     res.redirect("/treats");
//   })
// });

//index of treats
// router.get("/", (req, res) => {
//   // res.send("index page");
//   Treats.find({}, (err, allTreats) => {
//     res.render("index.ejs", {
//       treats: allTreats,
//       currentUser: req.session.currentUser
//     });
//   });
// });

//show treat
//go to to treats/:id
//show treat req.params.id
// router.get("/:id", (req, res) => {
//   // res.render("treats/show.ejs");
//   Treats.findById(req.params.id, (err, showTreat) => {
//       res.render("treats/show.ejs", {
//         treats: showTreat,
//         currentUser: req.session.currentUser
//       })
//     })
//   });

//show all places
//go to treats/:id/places
//link to real pages
//link to edit
//leave messages
// router.get("/:id/places", (req, res)=>{
//   Treats.places.findById(req.params.id, (err, showPlace) => {
//     res.redirect("treats.places[i]");
//     })
//   });

//edit treat show page
// router.get("/:id/edit", (req, res) => {
//   Treats.findById(req.params.id, (err, editTreat)=>{
//     res.render("treats/edit.ejs", {
//       treats: editTreat
//     });
//   })
// })

//put to treat show page from edit
// router.put("/:id", (req, res)=>{
//   Treats.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=> {
//      res.redirect("/treats/" + req.params.id);
//    })
//  })

//delete treat
// router.delete("/:id", (req, res) => {
//   Treats.findByIdAndRemove (req.params.id, (err, deleteTreat)  => {
//    res.redirect("/treats");
//    })
//  });


module.exports = router;
