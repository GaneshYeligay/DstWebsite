const mongoose = require("mongoose");

let Internship = new mongoose.Schema({
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
  },
  month: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Internship", Internship);
