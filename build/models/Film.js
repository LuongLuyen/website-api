"use strict";

var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Film", Schema);