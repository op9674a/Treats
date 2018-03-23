const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  image: String,
  name: String,
  description: String,
  map:String,
})

const treatSchema = new Schema({
image: String,
name: String,
description: String,
places:[String],
locations: [locationSchema]
})

const Treats = mongoose.model("Treats", treatSchema);
const Locations = mongoose.model("Locations", locationSchema);

module.exports = Treats;
