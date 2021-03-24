const mongoose = require("mongoose");
// const FinishingSchool = require("../model/tecFinishing");
let FinishingSchool = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("FinishingSchool", FinishingSchool);
