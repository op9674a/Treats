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

// users controller
const usersController = require("./controllers/users.js");
app.use("/users", usersController);

// sessions controller
const sessionsController = require('./controllers/sessions.js');
app.use("/sessions", sessionsController);

// treats controller
const treatsController = require("./controllers/treats.js");
app.use("/treats", treatsController);

// places controller
const placesController = require("./controllers/places.js");
app.use("/treats/:id/places", placesController);




//index
app.get('/treats', (req, res)=>{

    res.render('index.ejs', {
        currentUser: req.session.currentUser
        // currentUsername: req.session.currentUser.username
    });
      console.log(req.session.currentUser.username);
});




mongoose.connect('mongodb://localhost:27017/treats');

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

app.listen(3000, ()=>{
    console.log('listening');
});
