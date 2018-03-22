const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const treatSchema = Schema({
image: [String],
name: String,
description: String,
})

const Treats = mongoose.model("Treats", treatSchema);

module.exports = Treats;
