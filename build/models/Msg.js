"use strict";

var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Msg", Schema);