const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized: false
}))
app.use(express.urlencoded({extended:false}));

// treats controller
const treatsController = require("./controllers/treats.js");
app.use("/treats", treatsController);

// users controller

// sessions controller

// places controller

//index
app.get("/", (req, res)  =>  {
  res.send("hi");
})




mongoose.connect('mongodb://localhost:27017/treats');

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

app.listen(3000, ()=>{
    console.log('listening');
});
