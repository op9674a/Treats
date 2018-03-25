const express = require('express');
const router = express.Router();
const seed = require("../models/seedusers.js")
const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const Treats = require("../models/treats.js")


//SEED ROUTE
router.get("/seedUsers", (req, res) =>{
  User.create(seed, (err, createdUser) => {
  console.log(createdUser);
  res.redirect("/treats");
})
})

router.get('/new', (req, res) => {
  res.render('users/new.ejs');
});

router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser) => {
    res.redirect("/treats");
  });
});

module.exports = router;
