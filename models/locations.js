const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Treats = require("./treats.js")

const locationSchema = new Schema({
  image: String,
  name: String,
  description: String,
  map:String,
})

const Locations = mongoose.model("Locations", locationSchema);
module.exports = Locations;
