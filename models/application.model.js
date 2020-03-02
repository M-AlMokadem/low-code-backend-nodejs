const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ApplicationSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Title: {
    type: String,
    required: true
  }
});

var Application = mongoose.model("Application", ApplicationSchema);
module.exports = { Application };
