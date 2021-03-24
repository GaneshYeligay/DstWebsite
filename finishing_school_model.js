const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let FinishingSchool = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  details: {
    type: String
  },
  message: {
    type: String
  }
});

module.exports = mongoose.model("FinishingSchool", FinishingSchool);
