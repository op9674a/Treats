const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = Schema({
image: String,
name: String,
description: String,
address: String,
map: String,
})

const Places = mongoose.model("Places", placeSchema);

module.exports = Places;
