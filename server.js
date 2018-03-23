const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'))

app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized: false
}))

// treats controller
const treatsController = require("./controllers/treats.js");
app.use("/treats", treatsController);
// users controller
const usersController = require("./controllers/users.js");
app.use("/users", usersController);
// sessions controller
const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);
//places controller
const placesController=require("./controllers/places.js")
app.use("/place", placesController);

//show place
//go to treats/place/:id
// app.get("/place", (req, res)=>{
//   res.send("place show page")
  // Treats.places.findById(req.params.id, (err, showPlace) =>{
  //   res.render("places/show.ejs", {
  //     places: showPlace,
  //     currentUser: req.session.currentUser
  //   })
  // })
// })


const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/treats";
mongoose.connect(mongoURI);

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening');
});
